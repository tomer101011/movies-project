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
            searchTitle: 'Released recently',
            movies: [],
            changePage: false
        }
    }

    componentDidMount() {
        const cookie = new Cookies();
        let userId = cookie.get('userId');

        if (userId === undefined)
            this.setState({ changePage: true });

        else {
            this.scroll();

            const url = `${server_path}/movies/recent/-1`
            axios.post(url, {})
                .then(res => {
                    this.setState({ movies: res.data });
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
                    <div className="movies">
                        {
                            this.state.movies.map((movie, i) => {
                                return (
                                    <div key={i} className="mov">
                                        <Link to={{ pathname: ROUTES.MOVIE, state: { movieId: movie.movieId } }}>
                                            <img alt={movie.title} src={movie.poster} />
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