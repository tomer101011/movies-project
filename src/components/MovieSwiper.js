import React, { Component } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import axios from "axios";

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import '../styles/swiper-style.css';

// install Swiper components
SwiperCore.use([Navigation]);

export default class MovieSwiper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        const url = 'http://localhost:9000/movies';
        axios.get(url)
            .then(res => {
                this.setState({ movies: res.data })
            })
            .catch(err => {
                console.log(err);
            })
        this.loadMovies();
    }

    loadMovies = () => {
        if (this.state.movies.length !== 0) {
            return (
                <Swiper
                    navigation
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 5
                        },

                        480: {
                            slidesPerView: 3,
                            spaceBetween: 5
                        },

                        768: {
                            slidesPerView: 5,
                            spaceBetween: 8
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 8
                        }
                    }}
                >
                    {
                        this.state.movies.map((movie, i) => {
                            return <SwiperSlide key={i}>
                                <a href="/">
                                    <img style={{ maxWidth: '100%' }} alt={movie.name} src={movie.picture} />
                                    <h3 className="hometitle">{movie.name}</h3>
                                </a>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            )
        }

    }

    render() {
        return (
            <div>

                <h2 className="panel">Recently added</h2>
                
                    {this.loadMovies()}

            </div >
        )
    }
}
