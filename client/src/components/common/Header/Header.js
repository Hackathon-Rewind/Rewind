import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../../images/MainPage/rewind-logo.png'
import styles from './Header.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('header col-12')}>
            <nav className={cx('container')}>
                <ul className={cx('main-list')}>
                    <Link to="/">
                        <div className={cx('logo')}><img src={logo} className="App-logo" alt="logo"/></div>
                    </Link>
                    <li><Link to="/list" className={cx('link')}>실종자 찾기</Link></li>
                    <li><Link to="/apply" className={cx('link')}>실종자 신청</Link></li>
                    <li><Link to="/report" className={cx('link')}>제보하기</Link></li>
                    <li><Link to="/mypage" className={cx('link')}>내정보</Link></li>
                    <li><Link to="/로그아웃" className={cx('link')}>로그아웃</Link></li>
                    {/*<li><Link to="/회원가입" className={cx('link')}>회원가입</Link></li>*/}
                    {/*<li><Link to="/로그인" className={cx('link')}>로그인</Link></li>*/}
                </ul>
            </nav>
        </div>
    )
};

export default Header;