import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './SignUp.css';
import { auth, db } from '../firebase';

const SignUpPage = ({ history }) =>
  <div className='sign-up-container'>
    <SignUpForm history={history} />
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null 
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
})

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = (event) => {
    const { 
      // eslint-disable-next-line
      username, 
      email, 
      passwordOne 
    } = this.state;

    const { history } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne) 
      .then(authUser => { 
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push('/');
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const { 
      username, 
      email, 
      passwordOne, 
      passwordTwo, 
      error 
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || 
      passwordOne === '' || 
      email === '' || 
      username === '';

    return (
      <div className='form-container'>
        <form 
        className='sign-form'
        onSubmit={this.onSubmit}>
          <h1>Create an Account</h1>
          <div>
            <input
              value={username}
              onChange={event => this.setState(byPropKey('username', event.target.value))}
              type="text"
              placeholder="Full Name"
              autoComplete='name'
            />
          </div>
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
              value={passwordOne}
              onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
              type="password"
              placeholder="Password"
              autoComplete='new-password'
            />
          </div>
          <div>
            <input
              value={passwordTwo}
              onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
              type="password"
              placeholder="Confirm Password"
              autoComplete='new-password'
            />
          </div>
          <div>
            <button 
            className='auth-button' 
            disabled={isInvalid} type="submit">
              Sign Up
            </button>
          </div>

          { error && <p>{error.message}</p> }
          <div>
            <p>Already have an account?</p>
            <Link to='/signin'><button className='auth-button'>Sign In</button></Link>
          </div>
      </form>
      </div>
    );
  }
}


export default withRouter(SignUpPage);

export {
  SignUpForm
};