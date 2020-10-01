import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

/* eslint-disable */
import zenscroll from 'zenscroll';
/* eslint-enabled */

import '../styles/all-movies-style.css'


import axios from 'axios';
import Cookies from 'universal-cookie';
import { server_path } from '../constants/server.js';
import * as ROUTES from '../constants/routes';


export default class AllMovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTitle: '',
            movies: [],
            changePage: false
        }
    }

    componentDidMount() {
        const cookie = new Cookies();
        const userId = cookie.get('userId');

        if (userId === undefined)
            this.setState({ changePage: true });

        else {
            const show = cookie.get('show');
            this.scroll();

            let url = '';
            let searchTitle = '';
            switch (show) {
                case 'recent':
                    url = `${server_path}/movies/recent/all`;
                    searchTitle = 'Released recently';
                    break;
                case 'favorites':
                    url = `${server_path}/movies/favorites/all`;
                    searchTitle = 'Favorite movies';
                    break;
                default:
                    url = `${server_path}/movies/topRated/all`;
                    searchTitle = 'Top rated';
            }

            axios.post(url, { userId })
                .then(res => {
                    this.setState({ movies: res.data, searchTitle: searchTitle });
                })
                .catch(err => { console.log(err); })
        }
    }

    scroll = () => {
        window.onscroll = () => {
            let currentScrollPos = window.pageYOffset;
            if (document.getElementById("toTop") !== null) {
                if (currentScrollPos === 0) {
                    document.getElementById("toTop").style.display = "none";
                }
                else
                    document.getElementById("toTop").style.display = "block";
            }
        }

    }

    goTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

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
            default:
                url = `${server_path}/movies/topRated/all`;
                searchTitle = 'Top rated';
        }

        const options = {
            path: '/',
            maxAge: 120 * 60 * 1000,
            httponly: true,
            sameSite: true
        }
        cookie.set('show', searchOrder, options);

        axios.post(url, { userId })
            .then(res => {
                this.setState({ movies: res.data, searchTitle: searchTitle });
            })
            .catch(err => { console.log(err); })
    }

    doRedirect = () => {
        if (this.state.changePage)
            return <Redirect to={ROUTES.HOME} />
    }

    loadSearchButons = () => {
        return (
            <div className="marginButtons">
                <button onClick={() => this.loadMovies('recent')} className="styleChoices releasedButton">Released recently</button>
                <button onClick={() => this.loadMovies('favorites')} className="styleChoices favoriteButton">Favorites</button>
                <button onClick={() => this.loadMovies('top-rated')} className="styleChoices topRatedButton">Top rated</button>
            </div>
        );
    }

    render() {
        return (
            <main className="content">
                {this.doRedirect()}
                <section className="centered">
                    <h3>{this.state.searchTitle}</h3>
                    {this.loadSearchButons()}
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
                </section>
                <button id="toTop" onClick={() => this.goTop()} className="btn btn-light btn-lg back-to-top">
                    <i className="fa fa-chevron-up"></i>
                </button>
            </main>
        );
    }
}