import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LoginControl.css';
import { auth } from '../firebase';

const SignOutButton = () =>
    <div className='login-button'>
        <button 
            onClick={auth.doSignOut} 
        >
            Sign Out
        </button>
    </div>

const LoginControl = (props, { authUser }) =>
    <div>
        { authUser
            ?   <SignOutButton />
            :   <div className='login-button'>
                    <Link to='/signin'><button >Sign In</button></Link>
                    <Link to='/signup'><button >Sign Up</button></Link>
                </div>
        }
    </div>

LoginControl.contextTypes = {
    authUser: PropTypes.object
};

export default LoginControl;