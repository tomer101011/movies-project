import React, {Component, useEffect, useState} from "react";
// import {Redirect} from "react-router-dom";

import "../styles/movie-info-style.css";
import "../styles/add-movie-style.css";

// import axios from "axios";
import {getManagerStatus} from "../redux/ducks/user";
import {useDispatch, useSelector} from "react-redux";
// import {server_path} from "../constants/server.js";
// import LoadingSpinner from "./LoadingSpinner.js";
// import * as ROUTES from "../constants/routes.js";

export default function AddMovie() {
  const [searchInput, setSearchInput] = useState("");
  // const [movieInfo, setMovieInfo] = useState("");
  // const [trailer, setTrailer] = useState("");
  // const [movieFromDB, setMovieFromDB] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [showSections, setShowSections] = useState(false);
  const [changePage, setChangePage] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManagerStatus());
  }, [dispatch]);

  const {isManager} = useSelector((state) => state.user);
  console.log(isManager);
  if (!isManager) setChangePage(true);

  return (
    <div className="wrapper">
      {/* {this.doRedirect()} */}
      <main className="content">
        <div className="single">
          <section className="addBox">
            <p className="searchHeader">
              Add a New Movie From IMDb <span id="spanWord">Or</span> Remove an
              existing one
            </p>
            <div className="wrap">
              <div className="search">
                <input
                  id="searchImdb"
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  className="searchTerm"
                  placeholder="Search a movie"
                />
                <button
                  onClick={() => this.searchOMDb()}
                  className="searchButton"
                >
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </section>

          {/* {this.loadSpinner()} */}
          {/* {this.loadTrailerSection()} */}
          {/* {this.loadMovieSection()} */}
        </div>
      </main>
    </div>
  );
}
