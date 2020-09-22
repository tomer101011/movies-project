import React, { Component } from 'react'

import HomeSlider from '../components/HomeSlider.js';
import MovieSwiper from '../components/MovieSwiper.js';

import Cookies from 'universal-cookie';



export default class HomePage extends Component {

    loadPage = () => {
        const cookie = new Cookies();
        const userIdCookie = cookie.get('userId');
        if (userIdCookie !== undefined) {
            return (
                <div>
                    <HomeSlider />
                    <MovieSwiper />
                    <MovieSwiper />
                    <MovieSwiper />
                </div>
            );
        }
        else {
            return (
                <div>
                    <HomeSlider />
                    <MovieSwiper />
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
