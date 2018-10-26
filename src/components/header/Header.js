import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { MovieContext } from '../Provider';
import LoginControl from '../../authentication/LoginControl';


class Header extends Component {
  static contextType = MovieContext;

  render() {
    const { fetchDefaultMovies } = this.context;
    return (
      <header>
        <div className='logo-container'>
          <Link to='/' 
          onClick={fetchDefaultMovies}>
            <h1 className='header-name'>Butterscotch Taco</h1>
          </Link>
        </div>
        <div>
          <LoginControl />
        </div>
      </header>
    )
  }
}

export default Header;