# Butterscotch Taco - A movie database filter
This app was created to showcase the ability to implement certain features. Specifically the use of React, a database, and an API in conjunction.

## How it Works // Getting Started
To start: Clone this repository and `cd` into the root folder.
##### -For a development build
Run `npm install` to get the required dependencies followed by `npm start`.
##### -For a production build
`npm install -g serve` to get a static server.
Run `npm build` to get a production build followed by `serve -s build`

## Credit - Contribution - Licensing
* [TMDB](https://www.themoviedb.org/). With it we're able to acquire the information needed to generate our Movie components.
* [Google's Firebase](https://firebase.google.com/) for it's authentication and storage features.

### TODO & WIP
As of 10/25 overhauling the site with the help of [https://github.com/EUsha5](https://github.com/EUsha5).

1. Improve readability of code
2. Improve component structure to need Context less
3. Refactor components to be up to date (remove constructors where not necessary)
4. Add responsiveness (grid system, hamburger menu, etc)
5. Add accessibility
6. Remove search sliders as they are not very accessible, replace some with search fields
7. Improve search capabilities