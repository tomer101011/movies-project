import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import '../styles/movie-info-style.css';
import '../styles/add-movie-style.css';

import axios from 'axios';
import { getManagerStatus } from '../redux/ducks/user';
import { connect } from "react-redux";
import { server_path } from '../constants/server.js';
import LoadingSpinner from './LoadingSpinner.js';
import * as ROUTES from '../constants/routes.js';

class AddMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',// search box input
            movieInfo: '',// movie info that will be loaded
            trailer: '',// trailer of the movie
            movieFromDB: [],// array with a movieId to check if the movie exist on the database
            loading: false,// show loading animation div
            showSections: false,// show movie section divs
            changePage: false// change page
        }
    }

    //check if the user is a manager and autorized to be in this page
    componentDidMount() {
        this.props.dispatch(getManagerStatus());
        const { isManager } = this.props.user;
        console.log(isManager);
        // if (!managerStatus)
        //     this.setState({ changePage: true });

        // const cookie = new Cookies();
        // let userId = cookie.get('userId');
        // //check if the userId is a manager.
        // //if not, the page will be redirected to the home page
        // const url = `${server_path}/login/user`;
        // axios.post(url, { userId: userId })
        //     .then(res => {
        //         if (!res.data.isManager)
        //             this.setState({ changePage: true });
        //     })
        //     .catch(err => { console.log(err); })
    }

    //set searchInput state
    setSearchInput = (e) => {
        this.setState({ searchInput: e.target.value });
    }

    //search a movie on OMDb and set the movieInfo state
    searchOMDb = () => {
        //we set loading to true till the movie is found on OMDb
        this.setState({ loading: true }, () => {

            //we search for the movie on OMDb
            const urlOMDb = `${server_path}/omdb`;
            axios.post(urlOMDb, { search: this.state.searchInput })
                .then(res => {

                    //if the movie is not found, we send a message and won't show the movie sections
                    if (res.data === 'movie not found') {
                        if (this.state.movieInfo === '')
                            this.setState({ showSections: false })
                        alert('Movie not found.');
                    }

                    //else we set the state with the movie info, trailer and array if we
                    //found the movie on the database
                    else
                        this.setState({
                            showSections: true,
                            movieInfo: res.data.movieInfo,
                            trailer: res.data.trailer,
                            movieFromDB: res.data.movieId
                        });
                })
                .finally(()=>{
                      //when the route send a response, loading is set to false
                      this.setState({ loading: false });
                })
                .catch(err => { console.log(err); })
        });
    }

    //returns a rating div with /100 if rating is not "N/A"
    loadRatingText = () => {
        if (this.state.movieInfo.rating === 'N/A')
            return <li><p><span>Metascore: </span>{this.state.movieInfo.rating}</p></li>
        else
            return <li><p><span>Metascore: </span>{this.state.movieInfo.rating}/100</p></li>
    }

    //load the "Add to the website button" if the movieFromDB array is empty.
    //if the movieId was found on the database on OMDb search, then movieFromDB won't be empty
    loadAddButton = () => {
        if (this.state.movieInfo !== '') {
            if (this.state.movieFromDB.length === 0)
                return <li><button onClick={() => this.clickMovieButton()} id="movieButton" className="favorite">Add to the website</button></li>
            else
                return <li><button onClick={() => this.clickMovieButton()} id="movieButton" className="favorite-color favorite">Remove from the website</button></li>
        }
    }

    //The button to add/remove a movie from the website
    clickMovieButton = () => {
        //again, if the movieFromDB is empty, then you can add the movie to the web app
        if (this.state.movieFromDB.length === 0) {

            const data = {
                movieInfo: this.state.movieInfo,
                trailer: this.state.trailer
            }

            //calling the server route to insert the movie to the database
            const url = `${server_path}/movies/insert`;
            axios.post(url, data)
                .then(res => {
                    //we change the button style to reflect the change
                    document.getElementById('movieButton').style.backgroundColor = "#0fbb65";
                    document.getElementById('movieButton').innerHTML = "Remove from the website";
                    //movie is now on the database. Next time this function is called, the "else" is called below
                    this.setState({ movieFromDB: [{ movieId: res.data.insertId }] });
                })
                .catch(err => {
                    console.log(err);
                })
        }
        //if we added the movie to the database, this "else" code will be entered
        else {
            //we call the delete route to delete the movie with movieId
            const data = { movieId: this.state.movieFromDB[0].movieId };
            const url = `${server_path}/movies/delete`;
            axios.post(url, data)
                .then(res => {
                    //we change the button style to reflect the change
                    document.getElementById('movieButton').style.backgroundColor = "#4e9af1";
                    document.getElementById('movieButton').innerHTML = "Add to the website";
                    //movie is not on the database. Next time this function is called, the "if" is called above
                    this.setState({ movieFromDB: [] });
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    //return the "LoadingSpinner" div if the page is searching from OMDb
    loadSpinner = () => {
        if (this.state.loading)
            return <LoadingSpinner />
    }

    //If we want to show the trailer section, we return this div
    loadTrailerSection = () => {
        if (this.state.showSections)
            return (
                <section className="trailer">
                    <div className="trailer-frame">
                        <iframe title={this.state.movieInfo.title} width="560" height="349" src={this.state.trailer} frameBorder="0" allowFullScreen />
                    </div>
                </section>
            );
    }

    //If we want to show the movie section, we return this div
    loadMovieSection = () => {
        if (this.state.showSections)
            return (
                <section className="movie">
                    <img alt='' src={this.state.movieInfo.poster} />
                    <ul>
                        <li>{this.state.movieInfo.title}</li>
                        <li>{this.state.movieInfo.plot}</li>
                        {this.loadAddButton()}
                        <li className="margin-genre"><p><span>Genres: </span>{this.state.movieInfo.genre}</p></li>
                        <li><p><span>Director: </span>{this.state.movieInfo.director}</p></li>
                        <li><p><span>Cast: </span>{this.state.movieInfo.actors}</p></li>
                        <li><p><span>Released: </span>{this.state.movieInfo.released}</p></li>
                        <li><p><span>Runtime: </span>{this.state.movieInfo.runtime}</p></li>
                        {this.loadRatingText()}
                    </ul>
                </section>
            );
    }

    //if the changePage state is true, the page wil be redirected to the home page
    doRedirect = () => {
        if (this.state.changePage)
            return <Redirect to={ROUTES.HOME} />
    }

    render() {
        return (
            <div className="wrapper">
                {this.doRedirect()}
                <main className="content">
                    <div className="single">
                        <section className="addBox">
                            <p className="searchHeader">Add a New Movie From IMDb <span id="spanWord">Or</span> Remove an existing one</p>
                            <div className="wrap">
                                <div className="search">
                                    <input id="searchImdb" onChange={this.setSearchInput} type="text" className="searchTerm" placeholder="Search a movie" />
                                    <button onClick={() => this.searchOMDb()} className="searchButton">
                                        <i className="fa fa-search" />
                                    </button>
                                </div>
                            </div>
                        </section>

                        {this.loadSpinner()}
                        {this.loadTrailerSection()}
                        {this.loadMovieSection()}

                    </div>
                </main>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    user: state.user
});

// {<all actions we use>}(<Component name>)
export default connect(mapStateToProps)(AddMovie);
