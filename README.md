# Butterscotch Taco - A movie database filter
This app was created to showcase the ability to implement certain features. Specifically the use of React, a database, and an API in conjunction.

## How it Works // Getting Started

#### Before starting
Unless you are using the [live version](https://plasmadice.github.io/butterscotch-taco/) of the website you will need your own [Firebase](firebase.google.com/) Web API Key Place yours in `/firebase/firebase.js`

To start: Clone this repository and `cd` into the root folder.
##### -For a development build
Run `npm install` to get the required dependencies followed by `npm start`.
##### -For a production build
`npm install` to get depdendencies, 
`npm install -g serve` to get a static server.
Run `npm build` to get a production build followed by `serve -s build`

## Credit - Contribution - Licensing
* [TMDB](https://www.themoviedb.org/). With it we're able to acquire the information needed to generate our Movie components.
* [Google's Firebase](https://firebase.google.com/) for it's authentication and storage features.
* [Hamburgers](https://jonsuh.com/hamburgers/) for the nifty hamburger menu

### TODO & WIP
As of 10/25 overhauling the site with the help of [https://github.com/EUsha5](https://github.com/EUsha5).

0. Fix issue on mobile with header stretching page horizontally
1. Improve readability of code // ~half done
2. Improve component structure to need Context less
3. Refactor components to be up to date (remove constructors where not necessary)
4. Add responsiveness (grid system, hamburger menu, etc) ~mostly done
5. Add accessibility
6. Remove search sliders as they are not very accessible, replace some with search fields
7. Improve search capabilities