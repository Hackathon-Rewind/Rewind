import React from 'react';
import logo from '../../../images/MainPage/rewind-logo.png'
import './Footer.scss';

const Footer = () => {
    return (
            <div className="App-section">
                <div className="sponsor">
                    <div className="sponsor-wrapper">
                        <div className="sponsor-image"><img src={logo} className="App-logo" alt="logo"/></div>
                        <div className="sponsor-image"><img src={logo} className="App-logo" alt="logo"/></div>
                        <div className="sponsor-image"><img src={logo} className="App-logo" alt="logo"/></div>
                        <div className="sponsor-image"><img src={logo} className="App-logo" alt="logo"/></div>
                        <div className="sponsor-image"><img src={logo} className="App-logo" alt="logo"/></div>
                    </div>
                </div>
            </div>
    )
};

export default Footer;