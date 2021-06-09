import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "../styles/swiper-style.css";
import otherPicture from "../pictures/others.png";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Cookies from "universal-cookie";
import axios from "axios";
import * as ROUTES from "../constants/routes.js";
import { searchOrderMap } from "../configs/configFile.js";

// install Swiper components
SwiperCore.use([Navigation]);

export default class MovieSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    //load the movies swiper based on the parameters
    componentDidMount() {
        //check what to fetch from the database based on orderSwiper:
        //recent, favorites or top-rated order
        let url = "";
        url = searchOrderMap(this.props.count)[this.props.orderSwiper].url;

        //fetch the movies from the database
        const cookie = new Cookies();
        const userId = cookie.get("userId");
        axios
            .post(url, { userId })
            .then(res => {
                this.setState({ movies: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    //load a "show others" picture to show on click the other movies not on the home page
    showOthersPicture = () => {
        const cookie = new Cookies();
        const userIdCookie = cookie.get("userId");
        if (userIdCookie !== undefined) {
            return (
                <SwiperSlide>
                    <Link to={{ pathname: ROUTES.ALL_MOVIES }}>
                        <img
                            onClick={() => this.addCookieSearch()}
                            className="others-style"
                            alt="show others"
                            src={otherPicture}
                        />
                    </Link>
                </SwiperSlide>
            );
        }
    };

    //add a "show" cookie order: recent, favorites or top-rated order
    addCookieSearch = () => {
        const cookie = new Cookies();
        const options = {
            path: "/",
            maxAge: 120 * 60 * 1000,
            httponly: true,
            sameSite: true,
        };
        cookie.set("show", this.props.orderSwiper, options);
    };

    //add a "movieId" cookie that will be used on MovieInfo component
    addCookieMovieId = movieId => {
        const cookie = new Cookies();
        const options = {
            path: "/",
            maxAge: 120 * 60 * 1000,
            httponly: true,
            sameSite: true,
        };
        cookie.set("movieId", movieId, options);
    };

    //load the movies swiper on the page
    showMovies = () => {
        if (this.state.movies.length !== 0) {
            return (
                <Swiper
                    navigation
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },

                        480: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },

                        768: {
                            slidesPerView: 5,
                            spaceBetween: 8,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 8,
                        },
                    }}
                >
                    {this.state.movies.map((movie, i) => {
                        return (
                            <SwiperSlide key={movie.movieId}>
                                <Link to={{ pathname: ROUTES.MOVIE }}>
                                    <img
                                        onClick={() => this.addCookieMovieId(movie.movieId)}
                                        className="imgSwiper"
                                        style={{ maxWidth: "90%", width: "80%" }}
                                        alt={movie.title}
                                        src={movie.poster}
                                    />
                                    <h3 className="hometitle">
                                        {movie.title}
                                    </h3>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                    {this.showOthersPicture()}
                </Swiper>
            );
        }
    };

    //load the title of the movie swiper on the page
    setTitle = () => {
        return searchOrderMap("-1")[this.props.orderSwiper].headLabel;
    };

    render() {
        return (
            <div>
                {this.setTitle()}
                {this.showMovies()}
            </div>
        );
    }
}
