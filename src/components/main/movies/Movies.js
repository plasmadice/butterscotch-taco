import React from "react";
import "./Movies.css";
import MovieListItem from "./MovieListItem";
import Button from "../navigation/Button";
import { MovieContext } from '../../Provider';

const Movies = ({
  movies, 
  page,
  onPageIncrease, 
  onPageDecrease
}) => (
  <MovieContext.Consumer>
    {context => (
      <React.Fragment>
        <section className='movies-list-container'>
          {context.state.usedSearch ? (
            <h4>You are viewing results for {context.state.lastSearch}...</h4>
          ) : null}
          <ul className="movies">
          {movies.map( movie => (
          <MovieListItem key={movie.id} movie={movie} />
          ))}
          </ul>
        <div className="pagination">
          <Button onClick={onPageDecrease}>Previous</Button>
          <span>{`Page ${page} of ${context.state.total_pages}`}</span>
          <Button onClick={onPageIncrease}>Next</Button>
        </div>
        </section>
      </React.Fragment>
    )}
  </MovieContext.Consumer>
)


export default Movies;
