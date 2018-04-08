import React, { Component } from 'react';
import "./SearchField.css";

class SearchField extends Component {

    // autofocuses search field
    componentDidMount() {
        this.searchInput.focus();
    }

    render () {
        const { submitSearchUrl, searchFieldValue } = this.props;
        return (
            <form onSubmit={submitSearchUrl} className="search-field">
                <input className="search-box" 
                    type="text" 
                    onChange={searchFieldValue} 
                    placeholder='search for something'
                    ref={(input) => { this.searchInput = input; }}
                    />
                <button type="submit" value="Search">Search</button>
            </form>
        )
    }
}



export default SearchField;