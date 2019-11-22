import React, { useEffect } from 'react';
import logo from '../../../images/MainPage/rewind-logo.png'
import './Footer.scss';
import axios from 'axios'


const Footer = () => {

    const getUser = ()=>{
        console.log("hello!");
        axios({
            method:"GET",
            url:"http://172.26.0.34:8000/missing/promotion/"
        })
        .then((e)=>{
            console.log(e);
        })
    }

    useEffect(()=>{
        getUser();
    },[])
    return (
            <div className="App-section">
                <div className="sponsor">
                    <div className="sponsor-wrapper">
                        <div className="sponsor-image"><img src={logo} className="App-logo" alt="logo"/></div>
                        <div className="sponsor-image"><img src={logo} className="App-logo" alt="logo"/></div>
                        <div className="sponsor-image"><img src={logo} className="App-logo" alt="logo"/></div>
                    </div>
                </div>
            </div>
    )
};

export default Footer;