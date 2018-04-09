import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import dab from '../../images/dab.png';
import { MovieContext } from '../Provider';
import LoginControl from '../../authentication/LoginControl';


const Header = () => (
  <MovieContext.Consumer>
    {context => 
      <header>
        <div className='logo-container'>
          <Link to='/' onClick={context.fetchDefaultMovies}>
            <img src={dab} alt="dabbing weeb"/>
          </Link>
          <Link to='/' onClick={context.fetchDefaultMovies}>
            <h1>Butterscotch Taco</h1>
          </Link>
        </div>

        <div>
        </div>
        
        <div>
          <LoginControl />
        </div>
      </header>
    }
  </MovieContext.Consumer>
)

export default Header;