import React, { Component } from 'react';
import LoadingMovie from "./LoadingMovie";
import "./Movie.css";
import NotFound from '../NotFound';
import placeholder from '../../images/placeholder.jpg';

class Movie extends Component {
  state = {
    isLoading: true,
    movie: {}
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=7b841dfbcf70221f9a3069c60455c66b&language=en-US`;
    fetch(movieUrl)
      .then(response => response.json())
      .then(data => this.setState({ movie: data, isLoading: false }))
      .catch(error => console.log("Error (Movie likely does not exist):", error));
  }

  render() {
    const { isLoading } = this.state;
    const {
      title,
      backdrop_path,
      release_date,
      genres,
      overview,
      vote_average,
      runtime,
      poster_path
    } = this.state.movie;

    const year = release_date ? release_date.substring(0, 4) : null;

    const backgroundStyle = {
      backgroundImage: `${
        !!backdrop_path 
        ? `url(http://image.tmdb.org/t/p/w1280/${backdrop_path})` 
        : !!poster_path 
          ? `url(http://image.tmdb.org/t/p/w1280/${poster_path})`
          : `url(${placeholder})`
        }`
    }

    if (this.state.movie.status_code) {
      return (
        <NotFound />
      )
    } else {
      return (
      <div className="movie-page"> 
        { 
          isLoading 
            ? <LoadingMovie />
            : <div>
                <div className="movie-image" style={backgroundStyle} />
                <div className="movie-details">
                  <h1>
                    {title}
                    <span>({year})</span>
                  </h1>
                  <section className="genres">
                    {genres.map((genre, index) => (
                      <div key={genre.id}>
                        <span>{genre.name}</span>
                        {index < genres.length - 1 && (
                          <span className="separator">|</span>
                        )}
                      </div>
                    ))}
                  </section>
                  <h5>
                    Rating:
                    <span>{vote_average}</span>
                  </h5>
                  <h5>
                    Runtime:
                    <span>{`${runtime} min`}</span>
                  </h5>
                  <h4>Overview</h4>
                  <p>{overview}</p>
                  <a 
                  href={`https://www.themoviedb.org/movie/${this.props.match.params.movieId}`} 
                  target='_blank'
                  rel="noopener noreferrer">
                    View {this.state.movie.title} on Themoviedb.org
                  </a>
                </div>
              </div>
        }
      </div> 
      )
    }
  }
}

export default Movie;