import React from 'react';
import '../styles/MainPage/MainPage.css';
import {PageTemplate} from "../components/common";
import Banner from "../components/Main/Banner";
import LostPeople from "../components/Main/LostPeople";

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
                        <span><img src="http://www.missingchild.or.kr/upload/popupzon/visual1.jpg" alt="logo"/></span>
                        <span>
                            <iframe width="500" height="500" src="https://www.youtube.com/embed/ChRDZH6btW8"
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