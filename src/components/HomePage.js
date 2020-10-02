import React, { Component } from 'react'

import HomeSlider from '../components/HomeSlider.js';
import MovieSwiper from '../components/MovieSwiper.js';

import Cookies from 'universal-cookie';

export default class HomePage extends Component {

    loadPage = () => {
        console.log('here')
        console.log(process.env)
        console.log(process.env.REACT_APP_TEMP)
        const cookie = new Cookies();
        const userIdCookie = cookie.get('userId');
        if (userIdCookie !== undefined) {
            return (
                <div>
                    <HomeSlider />
                    <MovieSwiper orderSwiper={'recent'} count={10} />
                    <MovieSwiper orderSwiper={'favorites'} count={10} />
                    <MovieSwiper orderSwiper={'top-rated'} count={10} />
                </div>
            );
        }
        else {
            return (
                <div>
                    <HomeSlider />
                    <MovieSwiper orderSwiper={'recent'} count={6} />
                </div>
            );
        }
    }

    render() {
        return (
            this.loadPage()
        )
    }
}
