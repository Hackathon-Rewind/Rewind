import React from 'react';
import back_arrow from '../images/MainPage/back.png';
import next_arrow from '../images/MainPage/next.png';
import LostPersonInfo from './LostPersonInfo.js'
import './LostPeople.css';

const LostPeople = () => {
    return (
        <div className="lost-people-wrapper">
            <span className="button"><img src={back_arrow} alt="" /></span>
            <LostPersonInfo />
            <span className="button"><img src={next_arrow} alt="" /></span>
        </div>
    );
};

export default LostPeople;