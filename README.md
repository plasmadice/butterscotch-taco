# Welcome

### This is my capstone project. Currently titled 'Sinema'. It is built with React v16.3.0

**Main Function:** Movie filtering website
**Additional Features:** 
Authentication system using Firebase
WIP Profile page (possibly liked movies)

The core of the site is [TMDB](https://www.themoviedb.org/)'s API. With it we're able to acquire the information needed to generate our Movie components.

A lot has been learned in the making of this website. React's state and prop management had to be conquered. During the making of this project React 16.3.0 was released and with that was the addition of `React.createContext()`. This luckily came about at the time when I was considering Redux or Mobx for the project's state management. While I will be learning Redux in the future, it would be too much to implement Redux in a project of this size.

The project was refactored to work with Context. Fortunately not much had to be changed to centralize state management.

The biggest hurdle was the bugs. With the addition of the search bar and authentication a lot of issues were revealed from small to large. Small being that in the API some movies do not have posters OR backdrop_image(s) and because of that I had to come up with workarounds or placeholders. Large being getting authentication to work reliably.

There was a lot of time spent at the drawing board in this project. Things went unemplemented if they weren't needed and a lot of bugs had to be sorted out. Going forward I will be researching and attempting Test Driven Development to try to cut down on the number of bugs.

This project feels like a success. With it behind me I will next be working on a project that will take advantage of the full MERN stack.