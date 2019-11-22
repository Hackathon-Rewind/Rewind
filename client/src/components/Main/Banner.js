import React from 'react';
import banner from '../images/MainPage/banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="slider-holder">
            <span id="slider-image-1"></span>
            <span id="slider-image-2"></span>
            <span id="slider-image-3"></span>
            <div className="image-holder">
                <img src={banner} alt="" className="slider-image" />
                <img src={banner} alt="" className="slider-image" />
                <img src={banner} alt="" className="slider-image" />
            </div>
            <div className="button-holder">
                <a href="#slider-image-1"><span className="slider-change"></span></a>
                <a href="#slider-image-2"><span className="slider-change"></span></a>
                <a href="#slider-image-3"><span className="slider-change"></span></a>
            </div>
        </div>
    );
};

export default Banner;