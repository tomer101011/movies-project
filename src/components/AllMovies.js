import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../styles/all-movies-style.css'

import axios from 'axios';
import { server_path } from '../constants/server.js';
import * as ROUTES from '../constants/routes';


export default class AllMovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTitle: 'Released recently',
            movies: []
        }
    }

    componentDidMount() {
        const url = `${server_path}/movies/recent/-1`
        axios.post(url, {})
            .then(res => {
                this.setState({ movies: res.data });
            })
            .catch(err => { console.log(err); })
    }

    goTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    render() {
        return (
            <main className="content">
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
                <button onClick={() => this.goTop()} className="btn btn-light btn-lg back-to-top">
                    <i className="fa fa-chevron-up"></i>
                </button>
            </main>
        );
    }
}