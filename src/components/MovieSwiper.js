import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Cookies from 'universal-cookie';
import axios from 'axios';

import *  as ROUTES from '../constants/routes';

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
        let url = '';
        switch (this.props.orderSwiper) {
            case 'recent':
                url = `http://localhost:9000/movies/recent/${this.props.count}`;
                break;
            case 'favorites':
                url = `http://localhost:9000/movies/favorites/${this.props.count}`;
                break;
            default:
                url = `http://localhost:9000/movies/topRated/${this.props.count}`;
        }

        const cookie = new Cookies();
        const userId = cookie.get('userId');
        axios.post(url, { userId })
            .then(res => {
                this.setState({ movies: res.data });
            })
            .catch(err => {
                console.log(err);
            })
    }

    showOthersPicture = () => {

        const cookie = new Cookies();
        const userIdCookie = cookie.get('userId');
        if (userIdCookie !== undefined) {
            return (
                <SwiperSlide>
                    <a href={`#${ROUTES.ALL_MOVIES}`}>
                        <img style={{ maxWidth: '100%', width: '78%' }} alt='show others' src={require(`../pictures/others.png`)} />
                    </a>
                </SwiperSlide>
            )
        }
    }

    showMovies = () => {
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
                            return (
                                <SwiperSlide key={i}>
                                    <Link to={{ pathname: ROUTES.MOVIE, state: { movieId: movie.movieId } }}>
                                        <img style={{ maxWidth: '90%', width: '80%' }} alt={movie.title} src={movie.poster} />
                                        <h3 className="hometitle">{movie.title}</h3>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                    {this.showOthersPicture()}
                </Swiper>
            )
        }
    }

    setTitle = () => {
        switch (this.props.orderSwiper) {
            case 'recent':
                return (<h2 className="panel">Released recently</h2>)
            case 'favorites':
                return (<h2 className="panel">Favorite movies</h2>)
            default:
                return (<h2 className="panel">Top rated</h2>)
        }
    }

    render() {
        return (
            <div>
                {this.setTitle()}
                {this.showMovies()}
            </div >
        )
    }
}
