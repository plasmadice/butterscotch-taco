import React from "react";
import "./MovieListItem.css";
import { Link } from "react-router-dom";
import placeholder from '../../../images/placeholder.jpg';

const MovieListItem = ({ movie }) => {
  const { 
    id, 
    title, 
    poster_path, 
    release_date, 
    vote_average 
  } = movie;
  // Returns placeholder image if poster_path doesn't exist
  const imgUrl = poster_path === null 
    ? placeholder 
    : `https://image.tmdb.org/t/p/w342/${poster_path}`;
  const year = release_date.substring(0, 4);
  return (
    <li className="movie-item">
      <Link to={`/movie/${id}`} className="thumbnail">
        <img src={imgUrl} alt={title} />
        <div className="movie-description">
        { // only shows title if poster is placeholder
          poster_path === null ? <h2>{title}</h2> : null}
          <section className="movie-details">
            <div className="movie-year">
              <span className="title">Year</span>
              <span>{year}</span>
            </div>
            {/* <div>{<h4>{title}</h4>}</div> */}
            <div className="movie-rating">
              <span className="title">Rating</span>
              <span>{vote_average}</span>
            </div>
          </section>
        </div>
      </Link>
    </li>
  );
};

export default MovieListItem;