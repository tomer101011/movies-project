import React, { Component } from 'react'
import Loader from 'react-loader-spinner';

import '../styles/add-movie-style.css';

export default class LoadingSpinner extends Component {
    render() {
        return (
            <Loader className="loadingStyle" type="ThreeDots" color="rgb(255, 233, 135)" height="100" width="100" />
        )
    }
}