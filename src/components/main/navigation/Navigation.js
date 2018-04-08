import React, { Component } from 'react';
import "./Navigation.css";
import Selection from "./Selection";
import Slider from './Slider';
import Button from './Button'
import SearchField from './SearchField';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.props.setGenres(data.genres))
      .catch(error => console.log(error));
  }

  render() {
    const { genre, genres, onGenreChange, onChange, year, rating, runtime, onSearchButtonClick, submitSearchUrl, searchFieldValue } = this.props;
    return (
      <section className="navigation">
        <SearchField submitSearchUrl={submitSearchUrl}
          searchFieldValue={searchFieldValue}
        />
        <Selection
          genre={genre}
          genres={genres}
          onGenreChange={onGenreChange}
        />

        <Slider data={year} onChange={onChange} />
        <Slider data={rating} onChange={onChange} />
        <Slider data={runtime} onChange={onChange} /> 

        <Button onClick={onSearchButtonClick}>
          Search
        </Button>
        <Link to='/about'><h5>About / Sources</h5></Link>
      </section>
    )
  }
}

export default Navigation;
