import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearWeather } from '../actions/index';

class ClearButton extends Component {
    onButtonClick() {
        localStorage.clear();
        this.props.clearWeather();
    }

    render() {
        return (
            <div className="clearButton">
                <button className="btn btn-danger" onClick={this.onButtonClick.bind(this)}> Clear Data!</button>
            </div >
        )
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ clearWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(ClearButton);