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
  static contextType = MovieContext;

  render() {
    const { 
      onChange, 
      onGenreChange, 
      setGenres, 
      onSearchButtonClick,
      submitSearchUrl,
      searchFieldValue,
      onPageIncrease,
      onPageDecrease
    } = this.context;

    return (
      <section className="main">
          <Navigation 
            onChange={onChange} 
            onGenreChange={onGenreChange}
            setGenres={setGenres} 
            onSearchButtonClick={onSearchButtonClick}
            submitSearchUrl={submitSearchUrl}
            searchFieldValue={searchFieldValue}
            {...this.context.state} 
          />
          <Switch>
            <Route exact path='/' render={() => (
              <Movies 
                movies={this.context.state.movies}
                page={this.context.state.page}
                onPageIncrease={onPageIncrease}
                onPageDecrease={onPageDecrease}
              />
            )} />
            <Route exact path='/signup' component={SignUpPage} />
            <Route exact path='/signin' component={SignInPage} />
            <Route exact path='/about' component={AboutPage} /> 
          </Switch>
      </section>
    )
  }
}



export default Main;