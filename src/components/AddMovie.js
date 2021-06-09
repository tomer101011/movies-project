import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import "../styles/movie-info-style.css";
import "../styles/add-movie-style.css";

// import axios from "axios";
import { getManagerStatus } from "../redux/ducks/user";
import { getMovieOMDb } from "../redux/ducks/movie";
import { useDispatch, useSelector } from "react-redux";
// import {server_path} from "../constants/server.js";
import LoadingSpinner from "./LoadingSpinner.js";
import * as ROUTES from "../constants/routes.js";

export default function AddMovie() {
    const [searchInput, setSearchInput] = useState("");
    // const [movieInfo, setMovieInfo] = useState("");
    // const [trailer, setTrailer] = useState("");
    // const [movieFromDB, setMovieFromDB] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [showSections, setShowSections] = useState(false);
    // const [changePage, setChangePage] = useState(false);

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getManagerStatus());
        },
        [dispatch]
    );

    const { isManager } = useSelector(state => state.user);
    const movieOMDb = useSelector(state => state.movie);

    const changeSearchInput = e => {
        setSearchInput(e.target.value);
    };

    const searchOMDb = () => {
        setLoading(true);
        dispatch(getMovieOMDb(searchInput));
        //tomerste
        //figure how to continue here after dispatch. Maybe with useEffect
    };

    const loadSpinner = () => {
        if (loading) return <LoadingSpinner />;
    };

    const loadTrailerSection = () => {};

    const loadMovieSection = () => {};

    const doRedirect = () => {
        if (!isManager) return <Redirect to={ROUTES.HOME} />;
    };

    return (
        <div className="wrapper">
            {console.log(movieOMDb)}
            {doRedirect()}
            <main className="content">
                <div className="single">
                    <section className="addBox">
                        <p className="searchHeader">
                            Add a New Movie From IMDb <span id="spanWord">Or</span> Remove an existing one
                        </p>
                        <div className="wrap">
                            <div className="search">
                                <input
                                    id="searchImdb"
                                    onChange={changeSearchInput}
                                    type="text"
                                    className="searchTerm"
                                    placeholder="Search a movie"
                                />
                                <button onClick={searchOMDb} className="searchButton">
                                    <i className="fa fa-search" />
                                </button>
                            </div>
                        </div>
                    </section>

                    {loadSpinner()}
                    {loadTrailerSection()}
                    {loadMovieSection()}
                </div>
            </main>
        </div>
    );
}
