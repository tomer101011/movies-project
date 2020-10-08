import React, { Component } from 'react'

import '../styles/movie-info-style.css';

import Cookies from 'universal-cookie';
import axios from 'axios';
import { server_path } from '../constants/server.js';

export default class MovieInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieInfo: '',// movie information
            favorite: false// check if the movie is a user favorite
        }
    }

    //get the information on the movie and set it on a state
    componentDidMount() {
        const cookie = new Cookies();
        let movieId = cookie.get('movieId');
        let userId = cookie.get('userId');

        //check if the specified movie is on the user's favorites
        if (userId !== undefined) {

            const data = {
                userId: userId,
                movieId: movieId
            }
            const url = `${server_path}/favorites/usermovie`;
            axios.post(url, data)
                .then(res => {
                    //if the movie is on the user's favorites, set favorite to true
                    if (res.data.length !== 0)
                        this.setState({ favorite: true })
                })
                .catch(err => {
                    console.log(err);
                })
        }

        //get the movie information based on the movieId given on the previous page
        const url = `${server_path}/movies/info`;
        axios.post(url, { movieId })
            .then(res => {

                //get the movie info
                const movie = res.data[0];
                const placeholder = "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg";
                
                //if the movie has no poster picture, set the size of the poster
                //to be the same as the other posters size
                if (movie.poster === placeholder)
                    document.getElementById('poster').style.width = '30%';

                this.setState({ movieInfo: movie });

            })
            .catch(err => {
                console.log(err);
            })
    }

    //Load the "Add to favorite" button on the page
    addFavButon = () => {
        const cookie = new Cookies();
        const userId = cookie.get('userId');
        if (userId !== undefined) {
            if (this.state.favorite)
                return (
                    <li><button id="fav" onClick={() => this.clickFavButton()} className="favorite favorite-color">Added!</button></li>
                )
            else
                return (
                    <li><button id="fav" onClick={() => this.clickFavButton()} className="favorite">Add to favorites</button></li>
                )
        }

    }

    //Add the movie to the favorites of the user
    clickFavButton = () => {
        const cookie = new Cookies();
        const data = {
            userId: cookie.get('userId'),
            movieId: cookie.get('movieId')
        }
        
        //if the movie is not on the user's favorites, then insert it and set favorite state to true
        //so when the function is called again the else below will be triggered instead
        if (!this.state.favorite) {
            const url = `${server_path}/favorites/insert`;
            axios.post(url, data)
                .then(res => {
                    document.getElementById('fav').style.backgroundColor = "#0fbb65";
                    document.getElementById('fav').innerHTML = "Added!";
                    this.setState({ favorite: true });
                })
                .catch(err => {
                    console.log(err);
                })
        }

        //else the movie is on the user's favorites and then the delete route will be called
        else {
            const url = `${server_path}/favorites/delete`;
            axios.post(url, data)
                .then(res => {
                    document.getElementById('fav').style.backgroundColor = "#4e9af1";
                    document.getElementById('fav').innerHTML = "Add to favorites";
                    this.setState({ favorite: false });
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    render() {
        return (
            <div className="wrapper">
                <main className="content">
                    <div className="single">

                        <section className="trailer">
                            <div className="trailer-frame">
                                <iframe title={this.state.movieInfo.poster} width="560" height="349" src={this.state.movieInfo.trailer} frameBorder="0" allowFullScreen />
                            </div>
                        </section>

                        <section className="movie">
                            <img id="poster" alt='' src={this.state.movieInfo.poster} />
                            <ul>
                                <li>{this.state.movieInfo.title}</li>
                                <li>{this.state.movieInfo.plot}</li>
                                {this.addFavButon()}
                                <li className="margin-genre"><p><span>Genres: </span>{this.state.movieInfo.genre}</p></li>
                                <li><p><span>Director: </span>{this.state.movieInfo.director}</p></li>
                                <li><p><span>Cast: </span>{this.state.movieInfo.actors}</p></li>
                                <li><p><span>Released: </span>{this.state.movieInfo.released}</p></li>
                                <li><p><span>Runtime: </span>{this.state.movieInfo.runtime}</p></li>
                                <li><p><span>Metascore: </span>{this.state.movieInfo.rating}/100</p></li>
                            </ul>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}
