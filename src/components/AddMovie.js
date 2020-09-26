import React, { Component } from 'react'

import axios from 'axios';
import { server_path } from '../constants/server.js';

import '../styles/movie-info-style.css';
import '../styles/add-movie-style.css';

export default class AddMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            movieInfo: '',
            trailer: '',
            movieId: ''
        }
    }

    setSearchInput = (e) => {
        this.setState({ searchInput: e.target.value });
    }

    searchOMDb = () => {
        const urlOMDb = `${server_path}/omdb`;
        axios.post(urlOMDb, { search: this.state.searchInput })
            .then(res => {

                if (res.data.trailer.message === "Request failed with status code 403")
                    alert('Couldn\'t get the movie from IMDb.');

                else if (res.data === 'movie not found')
                    alert('Movie not found.');

                else
                    this.setState({
                        movieInfo: res.data.movieInfo,
                        trailer: res.data.trailer,
                        movieId: res.data.movieId
                    });
            })
            .catch(err => { console.log(err); })
    }

    loadRatingText = () => {
        if (this.state.movieInfo.rating === 'N/A')
            return <li><p><span>Metascore: </span>{this.state.movieInfo.rating}</p></li>
        else
            return <li><p><span>Metascore: </span>{this.state.movieInfo.rating}/100</p></li>
    }

    loadAddButton = () => {
        if (this.state.movieInfo !== '') {
            if (this.state.movieId.length === 0)
                return <li><button onClick={() => alert()} id="addMovie" className="favorite">Add to the website</button></li>
            else
                return <li><button onClick={() => alert()} id="removeMovie" className="favorite-color favorite">Remove from the website</button></li>
        }
    }

    render() {
        return (
            <div className="wrapper">
                <main className="content">
                    <div className="single">
                        <section className="addBox">
                            <p className="searchHeader">Add a <span id="spanWord">new movie</span> from IMDb</p>
                            <div className="wrap">
                                <div className="search">
                                    <input id="searchImdb" onChange={this.setSearchInput} type="text" className="searchTerm" placeholder="Search a movie" />
                                    <button onClick={() => this.searchOMDb()} className="searchButton">
                                        <i className="fa fa-search" />
                                    </button>
                                </div>
                            </div>
                        </section>

                        <section className="trailer">
                            <div className="trailer-frame">
                                <iframe title={this.state.movieInfo.poster} width="560" height="349" src={this.state.trailer} frameBorder="0" allowFullScreen />
                            </div>
                        </section>

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
                    </div>
                </main>
            </div>
        )
    }
}
