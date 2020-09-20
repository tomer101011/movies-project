import React, { Component } from 'react'

import SwiperCore, { Pagination, Autoplay, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper components
SwiperCore.use([Pagination, Autoplay, EffectFade]);

export default class HomeSlider extends Component {
    render() {
        return (
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 4000 }}
                effect='fade'
            >
                <SwiperSlide>
                    <img className="home-swiper" alt='Space Betwen Us' src="https://1.bp.blogspot.com/-hcfAOXtey6w/XerQ38Xw7aI/AAAAAAAASB0/TEwtRQO85TETd8Lxp0hdRQDdZYo4JtgdwCLcBGAsYHQ/w914-h514-p-k-no-nu/star-wars-the-rise-of-skywalker-movie-poster-uhdpaper.com-4K-7.554.jpg" />
                    <div className="caption"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="home-swiper" alt='' src="https://www.focusoncode.com/uploads/demo/movies-trailer/images/slider/poster1.jpg" />
                    <div className="caption"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="home-swiper" alt='' src="https://www.focusoncode.com/uploads/demo/movies-trailer/images/slider/poster2.jpg" />
                    <div className="caption"></div>
                </SwiperSlide>
            </Swiper>
        )
    }
}
