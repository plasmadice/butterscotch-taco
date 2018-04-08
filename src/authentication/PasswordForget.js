import React, { Component } from 'react';

import { auth } from '../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
  forgotPassword: false
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  onClick = () => {
    this.state.forgotPassword ? this.setState({forgotPassword: false}) : this.setState({forgotPassword: true})
  }

  render() {
    const {
      email,
      error,
      forgotPassword
    } = this.state;

    const isInvalid = email === '';

    if (forgotPassword) {
      return (
        <form onSubmit={this.onSubmit}>
        <div><p>Password Retrieval:</p></div>
          <div>
            <input
              value={this.state.email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div>
            <button 
            className='auth-button' 
            disabled={isInvalid} type="submit">
              Reset Password
            </button>
          </div>
  
          { error && <p>{error.message}</p> }
        </form>
      )
    } else {
      return (
        <button 
        className='auth-button' 
        onClick={this.onClick}>Forgot Password?</button>
      )
    }
  }
}


export default PasswordForgetForm;