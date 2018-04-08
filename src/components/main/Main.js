import React, { Component } from 'react';
import "./Main.css";
import Navigation from "./navigation/Navigation";
import Movies from "./movies/Movies";
import { MovieContext } from '../Provider';
import { Switch, Route } from 'react-router-dom';
import AboutPage from '../AboutPage';
import SignUpPage from '../../authentication/SignUp';
import SignInPage from '../../authentication/SignIn';

class Main extends Component {
  render() {
    return (
      <section className="main">
        <MovieContext.Consumer>
          {context => 
          <React.Fragment>
            <Navigation 
              onChange={context.onChange} 
              onGenreChange={context.onGenreChange}
              setGenres={context.setGenres} 
              onSearchButtonClick={context.onSearchButtonClick}
              submitSearchUrl={context.submitSearchUrl}
              searchFieldValue={context.searchFieldValue}
              {...context.state} 
            />
            <Switch>
              <Route exact path='/' render={() => (
                <Movies 
                  movies={context.state.movies}
                  page={context.state.page}
                  onPageIncrease={context.onPageIncrease}
                  onPageDecrease={context.onPageDecrease}
                />
              )} />
              <Route exact path='/signup' component={SignUpPage} />
              <Route exact path='/signin' component={SignInPage} />
              <Route exact path='/about' component={AboutPage} /> 
            </Switch>
          </React.Fragment>
          }
        </MovieContext.Consumer>
      </section>
    )
  }
}



export default Main;