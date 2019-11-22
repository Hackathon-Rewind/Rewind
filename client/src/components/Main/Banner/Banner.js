import React from 'react';
import banner1 from '../../../images/background4.jpg';
import banner2 from '../../../images/background3.jpg';
import banner3 from '../../../images/background1.jpg';
import './Banner.scss';

const Banner = () => {
    return (
        <div className="slider-holder">
            <span id="slider-image-1"></span>
            <span id="slider-image-2"></span>
            <span id="slider-image-3"></span>
            <div className="image-holder">
                <div className="slider-image">
                    <img src={banner1} alt="" />
                    <span>당신의 작은 관심, 한 가정을 지킵니다.</span>
                </div>
                <div className="slider-image">
                    <img src={banner2} alt="" />
                    <span>길을 잃어버린 아이에게 집을 찾아줄 수 있어요.</span>
                </div>
                <div className="slider-image">
                    <img src={banner3} alt="" />
                    <span>누군가의 소중한 사람, 당신도 찾을 수 있습니다.</span>
                </div>
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