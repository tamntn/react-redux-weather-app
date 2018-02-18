import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        // We need to go and fetch weather data here
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' }); // Empty the term and the search input
    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                        placeholder="Get a three-day forecast in your favorite cities"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// null mean we're not connecting any state
export default connect(null, mapDispatchToProps)(SearchBar);