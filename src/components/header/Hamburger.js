import React, { Component } from 'react';
import './Hamburger.css';

export default class Hamburger extends Component {
    // required use of constructor due to updateWidth changing 
    constructor(props) {
            super(props)
            this.state = {
                isVisible: false,
                isActive: null,
            }
            this.updateWidth = this.updateWidth.bind(this);
    }

    componentDidMount() {
        this.updateWidth();
        window.addEventListener("resize", this.updateWidth);
    }

    updateWidth() {
        if (window.innerWidth > 799) {
            this.setState({ isVisible: true })
        } else if (window.innerWidth <= 799) {
            this.setState({ isVisible: false })
        }
    }

    onButtonClick() {
        // expand navigation menu
        let nav = document.querySelector('.navigation');
        if (this.state.isActive) {
            nav.style.position = 'fixed';
            nav.style.left = '-340px';
        } else {
            nav.style.position = 'relative';
            nav.style.left = '0px';
        }

        this.setState((state) => {
            return {isActive: !state.isActive};
        });
    }

    render() {
        return (
            <button 
            onClick={this.onButtonClick.bind(this)}
            className={`hamburger hamburger--collapse ${
                this.state.isActive && 'is-active'
            }`} 
            type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        )
    }
}