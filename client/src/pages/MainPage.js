import React from 'react';

import Banner from '../components/Main/Banner.js';
import LostPeople from '../components/Main/LostPeople.js';
import '../styles/MainPage/MainPage.css';
import {PageTemplate} from "../components/common";

const MainPage = () => {
    return (
        <PageTemplate>
            <div className="App">
                <div className="App-section">
                    <Banner/>
                </div>
                <div className="App-section">
                    <span className="title">실종된 사람</span>
                    <LostPeople/>
                </div>
                <div className="App-section">
                    <span className="title">홍보 컨텐츠</span>
                    <div className="ad-container">
                        <span><img src="https://picsum.photos/500/500" alt="logo"/></span>
                        <span>
                            <iframe width="500" height="500" src="https://www.youtube.com/embed/D1PvIWdJ8xo"
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen>

                            </iframe>
                        </span>
                    </div>
                </div>
            </div>
        </PageTemplate>
    )
};

export default MainPage;