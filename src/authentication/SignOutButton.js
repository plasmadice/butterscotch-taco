import React from 'react';
import './SignOutButton.css';

import { auth } from '../firebase';

const SignOutButton = () =>
  <button
    className="signout-button" 
    onClick={auth.doSignOut} 
  >
    Sign Out
  </button>

export default SignOutButton;