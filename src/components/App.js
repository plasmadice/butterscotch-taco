import React from "react";
import { BrowserRouter, 
  Switch, Route } from "react-router-dom"
import Header from "./header/Header";
import Main from "./main/Main";
import Movie from "./movie/Movie";
import NotFound from "./NotFound";
import { ProviderWithRouter } from './Provider';

import withAuthentication from '../authentication/withAuthentication';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ProviderWithRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/signup' component={Main} />
            <Route exact path='/signin' component={Main} />
            <Route exact path='/about' component={Main} />
            <Route path='/movie/:movieId' component={Movie} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ProviderWithRouter>
    </BrowserRouter>
  );
};

export default withAuthentication(App);