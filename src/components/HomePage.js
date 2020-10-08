import React, { Component } from 'react'

import Cookies from 'universal-cookie';
import HomeSlider from '../components/HomeSlider.js';
import MovieSwiper from '../components/MovieSwiper.js';

export default class HomePage extends Component {

    //load the home page based on the userId.
    //If he is a user, 10 of recent ,favorites and top-rated movies are shown
    //else he is a guest and only 6 of the recently released movies are shown
    loadPage = () => {
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
