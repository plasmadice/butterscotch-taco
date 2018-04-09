import React, { Component } from 'react';
import './AboutPage.css';

class AboutPage extends Component {
    render () {
        return (
            <div className='about-page-container'>
                <div>
                    <h1>Words and Stuff</h1>
                    <h4><a href='https://github.com/plasmadice'>Link to My Github</a></h4>
                    <p>
                        React is an awesome library and I hope to 
                        master it. Check out my github profile for updates. 
                        Picking a name for the site was a struggle. I went with a random 
                        name generator.
                    </p>
                    <hr />
                    <ul>
                        <h4>Shoutouts and Sources</h4>
                        <li>Authentication/Database: <a href='https://firebase.google.com/'>Firebase/Firestore</a></li>
                        <li>API for movies: <a href='https://www.themoviedb.org/'>TheMovieDB.org</a></li>
                        <li><a href='http://www.codecamps.com/'>CodeCamps</a> and <a href='https://www.robinwieruch.de/'>rwieruch;</a> for excellent articles on React</li>
                        <li><a href='https://www.launchcode.org/'>LaunchCode</a> for the push in the right direction</li>
                        <li>Thank you to everyone who provided feedback!</li>
                    </ul>
                    <hr />
                    <h4>
                        <a href="mailto:phoenixquint@gmail.com?Subject=Butterscotch%20Taco" target="_top">
                            Contact Me
                        </a>
                    </h4>
                </div>
            </div>
        )
    }
}

export default AboutPage;