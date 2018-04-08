import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import dab from '../../images/dab.png';

import LoginControl from '../../authentication/LoginControl';


const Header = () => (
  <header>
    <div className='logo-container'>
      <Link to='/'>
        <img src={dab} alt="dabbing weeb"/>
      </Link>
      <Link to='/'>
        <h1>Butterscotch Taco</h1>
      </Link>
    </div>
    <div>
    </div>
    <div>
      <LoginControl />
    </div>
  </header>
)

export default Header;