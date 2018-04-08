import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { firebase } from '../firebase';

// This higher order component prevents
// components from not being seen if
// user is not auth
// exported as withAuthorization(authCondition)(component)


// adds an observer to the user's sign-in state
// if firebase.auth().onAuthStateChanged changes
// runs function
const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
            //originally push(routes.SIGN_IN)
          this.props.history.push('/');
        }
      });
    }

    render() {
      return this.context.authUser ? <Component /> : null;
    }
  }

  WithAuthorization.contextTypes = {
    authUser: PropTypes.object,
  };

  return withRouter(WithAuthorization);
}

export default withAuthorization;