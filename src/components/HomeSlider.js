import React, { Component } from 'react'

//import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

import SwiperCore, { Pagination, Autoplay, EffectFade } from 'swiper';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { server_path } from '../constants/server.js';

//use Swiper components
SwiperCore.use([Pagination, Autoplay, EffectFade]);

export default class HomeSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posters: []// posters array
        }
    }

    //load the big high res posters from the database
    //and show above the recently released movie swiper
    componentDidMount() {
        const url = `${server_path}/posters`;

        axios.get(url)
            .then(res => {
                let data = res.data;
                data = this.shuffle(data);
                this.setState({ posters: data });
            })
            .catch(err => {
                console.log(err);
            })
    }

    //shuffle the posters array on every page refresh
    shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        //while there remain elements to shuffle
        while (currentIndex !== 0) {

            //pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            //and swap it with the current element
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    //load the home slider on the page
    loadHomeSlider = () => {

        if (this.state.posters.length !== 0) {
            return (
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    effect='fade'
                >
                    {
                        this.state.posters.map((poster, i) => {
                            return <SwiperSlide key={poster.posterId}>
                                <img className="home-swiper" alt={poster.title} src={poster.poster} />
                                <div className="caption">
                                    <div className="captioninside">
                                        <h2 className="title-style">{poster.title}</h2>
                                        <h2 className="plot-style">{poster.plot}</h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            )
        }
        else return <div></div>
    }

    render() {
        return (
            this.loadHomeSlider()
        )
    }
}
