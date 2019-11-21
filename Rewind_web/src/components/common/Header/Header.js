import React from 'react';
import 'Header.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header col-12">
            <nav className="container">
                <ul className="main-list">
                    <Link to="/">
                        <div className="logo">로고일겁니다</div>
                    </Link>
                    <li><Link to="/list" className="link">실종자 찾기</Link></li>
                    <li><Link to="/report" className="link">실종자 신청</Link></li>
                    <li><Link to="/제보" className="link">제보하기</Link></li>
                    <li><Link to="/mypage" className="link">내정보</Link></li>
                    <li><Link to="/로그아웃" className="link">로그아웃</Link></li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;