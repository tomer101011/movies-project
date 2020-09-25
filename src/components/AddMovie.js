import React, { Component } from 'react'

// import axios from 'axios';
// import { server_path } from '../constants/server.js';

import '../styles/movie-info-style.css';
import '../styles/add-movie-style.css';

export default class AddMovie extends Component {
    render() {
        return (
            <div className="wrapper">
                <main className="content">
                    <div className="single">
                        <section className="addBox">
                            <p className="searchHeader">Add a new movie from IMDb <span id="spanOr">or</span> remove an existing one</p>
                            <div className="wrap">
                                <div className="search">
                                    <input id="searchImdb" type="text" className="searchTerm borderRadius1" placeholder="Search a movie from IMDb" />
                                    <button type="submit" className="searchButton borderRadius2">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="wrap">
                                <div className="search">
                                    <input id="searchRemove" type="text" className="searchTerm borderRadius3" placeholder="Search a movie to remove" />
                                    <button type="submit" className="searchButton borderRadius4">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section className="trailer">
                            <div className="trailer-frame">
                                <iframe title={'movie title'} width="560" height="349" src="" frameBorder="0" allowFullScreen />
                            </div>
                        </section>

                        <section className="movie">
                            <img alt='' src={'poster link'} />
                            <ul>
                                {/* title is here */}
                                <li>{}</li>
                                {/* plot is here */}
                                <li>{}</li>
                                {/* <li><button onClick={() => alert()} id="fav" className="favorite">Add to the website</button></li> */}
                                <li className="margin-genre"><p><span>Genres: </span>{}</p></li>
                                <li><p><span>Director: </span>{}</p></li>
                                <li><p><span>Cast: </span>{}</p></li>
                                <li><p><span>Released: </span>{}</p></li>
                                <li><p><span>Runtime: </span>{}</p></li>
                                <li><p><span>Metascore: </span>{`/100`}</p></li>
                            </ul>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}
