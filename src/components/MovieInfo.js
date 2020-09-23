import React, { Component } from 'react'

import Cookies from 'universal-cookie';
import axios from 'axios';

import '../styles/movie-info-style.css';

export default class MovieInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieInfo: {}
        }
    }

    componentDidMount() {
        const cookie = new Cookies();
        let movieId = cookie.get('movieId');

        if (this.props.location.state)
            if (movieId === undefined || movieId !== this.props.location.state.movieId) {
                const options = {
                    path: '/',
                    maxAge: 120 * 60 * 1000,
                    httponly: true,
                    sameSite: true
                }
                cookie.set('movieId', this.props.location.state.movieId, options);
                movieId = cookie.get('movieId');
            }

        const url = `http://localhost:9000/movies/info`;
        axios.post(url, { movieId })
            .then(res => {
                this.setState({ movieInfo: res.data[0] });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="wrapper">
                <main className="content">
                    <div className="single">

                        <section className="trailer">
                            <div className="trailer_frame">
                                <iframe title='1' width="560" height="315" src={this.state.movieInfo.trailer} frameBorder="0" allowFullScreen />
                            </div>
                        </section>

                        <section className="movie">
                            <img alt='' src={this.state.movieInfo.poster} />
                            <ul>
                                <li>{this.state.movieInfo.title}</li>
                                <li>{this.state.movieInfo.plot}</li>
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
