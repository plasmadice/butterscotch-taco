import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import SignOutButton from './SignOut';

const Navigation = (props, { authUser }) =>
    <div>
        { authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </div>

Navigation.contextTypes = {
    authUser: PropTypes.object
};


const NavigationAuth = () =>
    <SignOutButton />

const NavigationNonAuth = () =>
    <ul>
        <li><Link to={'/'}>Landing</Link></li>
        <li><Link to={'/'}>Sign In</Link></li>
    </ul>

export default Navigation;