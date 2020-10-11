import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

import '../styles/all-movies-style.css'

import axios from 'axios';
import scrollToElement from 'scroll-to-element';
import Cookies from 'universal-cookie';
import { server_path } from '../constants/server.js';
import * as ROUTES from '../constants/routes.js';

export default class AllMovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTitle: '',// search Title
            movies: [],// all the movies based on the "show" cookie
            changePage: false// change page
        }
    }

    //check if the user is not a guest and autorized to be here
    //also gets all the movies from the database based on "show" cookie
    componentDidMount() {
        //scroll to top button- button shown or not shown on top
        this.scrollButton();
        const cookie = new Cookies();
        const userId = cookie.get('userId');

        //check if the user is not a guest. If he is, he will be redirected to home page
        if (userId === undefined)
            this.setState({ changePage: true });

        else {
            //get the "show" cookie: how the movies will be fetched from the database
            const show = cookie.get('show');

            //The movies will be fetched based on the "show" cookie type:
            //recent search type, favorites search type or top-rated search type
            let url = '';
            let searchTitle = '';
            //the url to fetch data from the server is changed according to "show" cookie
            switch (show) {
                case 'recent':
                    url = `${server_path}/movies/recent/all`;
                    searchTitle = 'Released recently';
                    break;

                case 'favorites':
                    url = `${server_path}/movies/favorites/all`;
                    searchTitle = 'Favorite movies';
                    break;

                //top-rated
                default:
                    url = `${server_path}/movies/topRated/all`;
                    searchTitle = 'Top rated';
            }

            //call the server to fetch the movies
            axios.post(url, { userId })
                .then(res => {
                    this.setState({ movies: res.data, searchTitle: searchTitle });
                })
                .catch(err => { console.log(err); })
        }
    }

    //scroll to top button- button shown or not shown on top
    scrollButton = () => {
        window.onscroll = () => {
            let currentScrollPos = window.pageYOffset;
            if (document.getElementById("toTop") !== null) {
                //if the window is at the top, then the scroll button is not
                if (currentScrollPos === 0) {
                    document.getElementById("toTop").style.display = "none";
                }
                else
                    document.getElementById("toTop").style.display = "block";
            }
        }
    }

    //go to top of the page will be smooth
    goTop = () => {
        scrollToElement('.content', {
            offset: 0,
            ease: 'inOutSine',
            duration: 500
        });
    }

    //add a cookie with a given movieId
    addCookieMovieId = (movieId) => {
        const cookie = new Cookies();
        const options = {
            path: '/',
            maxAge: 120 * 60 * 1000,
            httponly: true,
            sameSite: true
        }
        cookie.set('movieId', movieId, options);
    }

    //load the movies based on searchOrder given: "recent", "favorites", "top-rated" orders 
    loadMovies = (searchOrder) => {
        const cookie = new Cookies();
        const userId = cookie.get('userId');
        let url = '';
        let searchTitle = '';

        switch (searchOrder) {
            case 'recent':
                url = `${server_path}/movies/recent/all`;
                searchTitle = 'Released recently';
                break;
                
            case 'favorites':
                url = `${server_path}/movies/favorites/all`;
                searchTitle = 'Favorite movies';
                break;

            //top-rated
            default:
                url = `${server_path}/movies/topRated/all`;
                searchTitle = 'Top rated';
        }

        //also set the "show" cookie to the order given so if we
        //do a refresh, the movies will be loaded again
        const options = {
            path: '/',
            maxAge: 120 * 60 * 1000,
            httponly: true,
            sameSite: true
        }
        cookie.set('show', searchOrder, options);

        //call the server to fetch the movies
        axios.post(url, { userId })
            .then(res => {
                this.setState({ movies: res.data, searchTitle: searchTitle });
            })
            .catch(err => { console.log(err); })
    }

    //show the movies to the screen if there are any.
    //If not, a placeholder picture is displayed
    loadMoviePictures = () => {
        if (this.state.movies.length !== 0)
            return (
                <div className="movies">
                    {
                        this.state.movies.map((movie, i) => {
                            return (
                                <div key={i} className="mov">
                                    <Link to={{ pathname: ROUTES.MOVIE }}>
                                        <img onClick={() => this.addCookieMovieId(movie.movieId)} alt={movie.title} src={movie.poster} />
                                        <h2 className="movietitle">{movie.title}</h2>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            );

        //placeholder picture is displayed
        else {
            const picture = require(`../pictures/noFavorites.png`);
            return (
                <img className="no-movies-pic" alt="No movies" src={picture} />
            );
        }
    }

    //show search buttons on the page
    loadSearchButons = () => {
        return (
            <div className="marginButtons">
                <button onClick={() => this.loadMovies('recent')} className="styleChoices releasedButton">Released recently</button>
                <button onClick={() => this.loadMovies('favorites')} className="styleChoices favoriteButton">Favorites</button>
                <button onClick={() => this.loadMovies('top-rated')} className="styleChoices topRatedButton">Top rated</button>
            </div>
        );
    }

    //if the changePage state is true, the page wil be redirected to the home page
    doRedirect = () => {
        if (this.state.changePage)
            return <Redirect to={ROUTES.HOME} />
    }

    render() {
        return (
            <main className="content">
                {this.doRedirect()}
                <section className="centered">
                    <h3>{this.state.searchTitle}</h3>
                    {this.loadSearchButons()}
                    {this.loadMoviePictures()}
                </section>
                <button id="toTop" onClick={() => this.goTop()} className="btn btn-light btn-lg back-to-top">
                    <i className="fa fa-chevron-up"></i>
                </button>
            </main >
        );
    }
}