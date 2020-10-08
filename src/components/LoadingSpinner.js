import React, { Component } from 'react'

import '../styles/add-movie-style.css';

import Loader from 'react-loader-spinner';

//The Loading spinner component is called when you search OMDb for the movie
export default class LoadingSpinner extends Component {
    render() {
        return (
            <Loader className="loadingStyle" type="ThreeDots" color="rgb(255, 233, 135)" height="100" width="100" />
        )
    }
}