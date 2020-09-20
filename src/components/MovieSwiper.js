import React, { Component } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import '../styles/swiper-style.css';

// install Swiper components
SwiperCore.use([Navigation]);


export default class MovieSwiper extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#191919'}}>
                <h2 className="panel">Recently added</h2>
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
                            spaceBetween: 5
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 10
                        }
                    }}
                >
                    <SwiperSlide >
                        <img style={{ maxWidth: '78%' }} alt='Space Betwen Us' src="https://www.focusoncode.com/uploads/demo/movies-trailer/images/3.jpg" />
                        <h3 className="hometitle">Space Betwen Us</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ maxWidth: '78%' }} alt='' src="https://www.focusoncode.com/uploads/demo/movies-trailer/images/9.jpg" />
                        <h3 className="hometitle">Space Betwen Us</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ maxWidth: '78%' }} alt='' src="https://www.focusoncode.com/uploads/demo/movies-trailer/images/4.jpg" />
                        <h3 className="hometitle">Space Betwen Us</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ maxWidth: '78%' }} alt='' src="https://www.focusoncode.com/uploads/demo/movies-trailer/images/5.jpg" />
                        <h3 className="hometitle">Space Betwen Us</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ maxWidth: '78%' }} alt='' src="https://www.focusoncode.com/uploads/demo/movies-trailer/images/7.jpg" />
                        <h3 className="hometitle">Space Betwen Us</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ maxWidth: '78%' }} alt='' src="https://www.focusoncode.com/uploads/demo/movies-trailer/images/2.jpg" />
                        <h3 className="hometitle">Space Betwen Us</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img style={{ maxWidth: '78%' }} alt='' src="https://www.focusoncode.com/uploads/demo/movies-trailer/images/8.jpg" />
                        <h3 className="hometitle">Space Betwen Us</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        )
    }
}
