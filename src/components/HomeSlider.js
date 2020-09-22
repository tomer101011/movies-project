import React, { Component } from 'react'

import SwiperCore, { Pagination, Autoplay, EffectFade } from 'swiper';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper components
SwiperCore.use([Pagination, Autoplay, EffectFade]);

export default class HomeSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posters: [],
        }
    }

    componentDidMount() {
        const url = 'http://localhost:9000/posters';

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

    shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    loadHomeSlider = () => {

        if (this.state.posters.length !== 0) {
            return (
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 4000 }}
                    effect='fade'
                >
                    {
                        this.state.posters.map((poster, i) => {
                            return <SwiperSlide key={i}>
                                <img className="home-swiper" alt={poster.title} src={poster.poster} />
                                <div className="caption">
                                    <div className="captioninside">
                                        <h2 className="poster-style">{poster.title}</h2>
                                        <a href="single.html" className="playbutton">View Info</a>
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
