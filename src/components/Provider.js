import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
const MovieContext = React.createContext();

class Provider extends Component {
    constructor(props) {
        super(props)
        this.nextSearchUrl = this.nextSearchUrl.bind(this);
    }

    state = {
        usedSearch: false,
        lastSearch: '',
        searchField: '',
        movies: [],
        total_pages: 1,
        page: 1,
        url: `https://api.themoviedb.org/3/genre/movie/list?api_key=7b841dfbcf70221f9a3069c60455c66b&language=en-US`,
        moviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=7b841dfbcf70221f9a3069c60455c66b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=`,
        genre: "Comedy",
        genres: [],
        year: {
          label: "year",
          min: 1990,
          max: 2018,
          step: 1,
          value: { min: 2014, max: 2018 }
        },
        rating: {
          label: "rating",
          min: 0,
          max: 10,
          step: 1,
          value: { min: 8, max: 10 }
        },
        runtime: {
          label: "runtime",
          min: 0,
          max: 300,
          step: 15,
          value: { min: 60, max: 120 }
        },
    }

    componentDidMount(){
        const savedState = this.getStateFromLocalStorage();
        if ( !savedState || (savedState && !savedState.movies.length)) {
            // fetch fresh if localStorage doesn't exist
          this.fetchMovies(this.state.moviesUrl, this.state.page);
        } else {
            // if localstorage exists then pull into state
            this.setState({ ...savedState });
            // then generate new movies
            this.setState({lastSearch: '', usedSearch: false})
            this.generateUrl(savedState);
        }
    }
    
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        this.saveStateToLocalStorage();
        // if current url is not the same as new moviesUrl
        if (this.state.moviesUrl !== nextState.moviesUrl) {
            // Fetches using new data
            this.fetchMovies(nextState.moviesUrl, nextState.page);
        }
        // changes page
        if (this.state.page !== nextState.page) {
            if (!nextState.usedSearch) {
                // fetch data from next page (non search)
                this.fetchMovies(this.state.moviesUrl, nextState.page);
            } else {
                this.fetchMovies(this.nextSearchUrl(), nextState.page)
                // fetch data from next page (search)
            }
        }
    }

    onGenreChange = event => {
        this.setState({ genre: event.target.value });
    }
    
    setGenres = genres => {
        this.setState({genres});
    }
    
    onChange = data => {
        this.setState({
          [data.type]: {
            ...this.state[data.type],
            value: data.value
          }
        });
    };
    
    generateUrl = params => {
        const { genres, year, rating, runtime } = params;
        const selectedGenre = genres.find( genre => genre.name === params.genre);
        const genreId = selectedGenre.id;

        const moviesUrl = `https://api.themoviedb.org/3/discover/movie?` +
            `api_key=7b841dfbcf70221f9a3069c60455c66b&` +
            `language=en-US&sort_by=popularity.desc&` +
            `with_genres=${genreId}&` +
            `primary_release_date.gte=${year.value.min}-01-01&` +
            `primary_release_date.lte=${year.value.max}-12-31&` +
            `vote_average.gte=${rating.value.min}&` +
            `vote_average.lte=${rating.value.max}&` +
            `with_runtime.gte=${runtime.value.min}&` +
            `with_runtime.lte=${runtime.value.max}&` +
            `page=`;

        this.props.history.push('/');
        this.setState({ moviesUrl });
    }
    
    onSearchButtonClick = () => {
        this.setState({page: 1});
        this.generateUrl(this.state);
        this.setState({lastSearch: ''});
        this.setState({usedSearch: false});
    }

    saveStateToLocalStorage = params => {
        localStorage.setItem("moviedata.params", JSON.stringify(this.state));
    }

    getStateFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem("moviedata.params"));
    }

    fetchMovies = (url, page) => {
        this.props.history.push('/');
        this.setState({searchField: ''});
        fetch(`${url}${page}`)
            .then(response => response.json())
            .then(data => {
                this.storeMovies(data)})
            .catch(error => console.log(error));
    }

    // throws an error if poster_path is not found
    storeMovies = data => {
        const movies = data.results.map(result => {
            const {
            vote_count,
            id,
            genre_ids,
            poster_path,
            title,
            vote_average,
            release_date
            } = result;
            return { vote_count, id, genre_ids, poster_path, title, vote_average, release_date };
        });
        this.setState({ movies, total_pages: data.total_pages });
    };

    onPageIncrease = () => {
        const { page, total_pages } = this.state
        const nextPage = page + 1;
        if (nextPage <= total_pages) {
            this.setState({ page: nextPage })
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }

    onPageDecrease = () => {
        const nextPage = this.state.page - 1;
        if ( nextPage > 0 ) {
            this.setState({ page: nextPage })
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }

    //SearchField functions
    submitSearchUrl = (event) => { 
        event.preventDefault();
        if (!this.state.searchField) {
            // fetches movies based on last search if field is empty
            this.fetchMovies(this.state.moviesUrl, this.state.page)
        } else {
            const search = this.state.searchField;
            const url = `https://api.themoviedb.org/3/search/movie?api_key=7b841dfbcf70221f9a3069c60455c66b&query=`;
            const formattedSearch = search.split(' ').join('+');
            const newUrl = `${url.concat(...formattedSearch)}&page=`;
            this.setState({page: 1});
            this.setState({ moviesUrl: newUrl });
            this.setState({usedSearch: true})
            this.setState({lastSearch: this.state.searchField})
            this.fetchMovies(newUrl, 1);
            // extremely crude form clear
            document.querySelector('input').value = '';
        }
    }

    nextSearchUrl = () => {
        const search = this.state.lastSearch;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=7b841dfbcf70221f9a3069c60455c66b&query=`;
        const formattedSearch = search.split(' ').join('+');
        const newUrl = `${url.concat(...formattedSearch)}&page=`;
        return newUrl;
    }

    searchFieldValue = (event) => {
    this.setState({searchField: event.target.value})
    }

    render () {
        return (
            <MovieContext.Provider value={{
                state: this.state, 
                onGenreChange: this.onGenreChange, 
                setGenres: this.setGenres,
                onChange: this.onChange,
                generateUrl: this.generateUrl, 
                onSearchButtonClick: this.onSearchButtonClick,
                saveStateToLocalStorage: this.saveStateToLocalStorage,
                getStateFromLocalStorage: this.getStateFromLocalStorage,
                fetchMovies: this.fetchMovies,
                storeMovies: this.storeMovies,
                onPageIncrease: this.onPageIncrease,
                onPageDecrease: this.onPageDecrease,
                submitSearchUrl: this.submitSearchUrl,
                searchFieldValue: this.searchFieldValue
            }}>
                {this.props.children}
            </MovieContext.Provider>
        )
    }
}

const ProviderWithRouter = withRouter(Provider);

export {
    MovieContext,
    ProviderWithRouter
}