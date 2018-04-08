import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import PasswordForgetForm from './PasswordForget';
import './SignIn.css';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

const SignInPage = ({ history }) =>
  <div className='sign-in-container'>
    <SignInForm history={history} />
  </div>

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push('/');
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const { email, password, error } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div className='form-container'>
        <form 
        className='sign-form' 
        onSubmit={this.onSubmit}>
          <h1>Sign In</h1>
          <div>
            <input
              value={email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}
              type="text"
              placeholder="Email Address"
              autoComplete='email'
            />
          </div>
          <div>
            <input
              value={password}
              onChange={event => this.setState(byPropKey('password', event.target.value))}
              type="password"
              placeholder="Password"
              autoComplete='current-password'
            />
          </div>
          <div>
            <button 
            className='auth-button' 
            disabled={isInvalid} type="submit">
              Sign In
            </button>
          </div>

          { error && <p>{error.message}</p> }
          <div>
            <p>
              Don't have an account? {' '/*placeholder*/}
              <Link to={'/signup'}><button className='auth-button'>Sign Up</button></Link>
            </p>
            <div className='password-forget-div'>
              <PasswordForgetForm />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };