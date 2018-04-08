import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import SignOutButton from './SignOutButton';

const SignOutAuth = (props, { authUser }) =>
    <div>
        { authUser
            ? <SignOutButton />
            : <p>Not Signed In</p>
        }
    </div>

SignOutAuth.contextTypes = {
    authUser: PropTypes.object
};

export default SignOutAuth;