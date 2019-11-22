import React from 'react';
import logo from '../images/MainPage/rewind-logo.png'
import Banner from '../components/Main/Banner.js';
import LostPeople from '../components/Main/LostPeople.js';
import '../styles/MainPage/MainPage.css';

const MainPage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className="header-wrapper">
                    <img src={logo} className="App-logo" alt="logo" />
                    <nav className="App-nav">
                        <span><a href="#my-info">내 정보</a></span>
                        <span><a href="#lost-people">실종자 정보</a></span>
                        <span><a href="#?">실종자 신고</a></span>
                        <span><a href="#login">로그인</a></span>
                        <span><a href="#register">회원가입</a></span>
                    </nav>
                </div>
            </header>
            <div className="App-section">
                <Banner />
            </div>
            <div className="App-section">
                <span className="title">실종된 사람</span>
                <LostPeople />
            </div>
            <div className="App-section">
                <span className="title">홍보 컨텐츠</span>
                <div className="ad-container">
                    <span><img src="https://picsum.photos/500/500" alt="logo" /></span>
                    <span><iframe width="500" height="500" src="https://www.youtube.com/embed/D1PvIWdJ8xo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></span>
                </div>
            </div>
            <div className="App-section">
                <div className="sponsor">
                    <span className="title">스폰서</span>
                    <div className="sponsor-wrapper">
                        <div className="sponsor-image"><img src={logo} className="App-logo" alt="logo" /></div>
                        <div className="sponsor-image"><img src={logo} className="App-logo" alt="logo" /></div>
                        <div className="sponsor-image"><img src={logo} className="App-logo" alt="logo" /></div>
                        <div className="sponsor-image"><img src={logo} className="App-logo" alt="logo" /></div>
                        <div className="sponsor-image"><img src={logo} className="App-logo" alt="logo" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainPage;