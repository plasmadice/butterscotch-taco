import React, { Component } from "react";
import "./Movies.css";
import MovieListItem from "./MovieListItem";
import Button from "../navigation/Button";
import { MovieContext } from '../../Provider';

class Movies extends Component {
  static contextType = MovieContext;

  render() {
    const { movies, page, onPageIncrease, onPageDecrease } = this.props;
    const { usedSearch, lastSearch, total_pages } = this.context.state;

    return (
      <section className='movies-list-container'>
        {usedSearch ? (
            <h4>You are viewing results for {lastSearch}...</h4>
          ) : null}
        <ul className="movies">
        {movies.map( movie => (
        <MovieListItem key={movie.id} movie={movie} />
        ))}
        </ul>
      <div className="pagination">
        <Button onClick={onPageDecrease}>Previous</Button>
        <span>{`Page ${page} of ${total_pages}`}</span>
        <Button onClick={onPageIncrease}>Next</Button>
      </div>
      </section>
    )
  }
}


export default Movies;
