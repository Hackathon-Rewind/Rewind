import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../../images/MainPage/rewind-logo.png'
import styles from './Header.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

const Header = () => {
    let token = localStorage.getItem("access_token");
    let isLogin = [];
    if(token === ""){
        isLogin.push(<li><Link to="/register" className={cx('link')}>회원가입</Link></li>);
        isLogin.push(<li><Link to="/login" className={cx('link')}>로그인</Link></li>)
    } else{
        isLogin.push(<li><Link to="/" onClick={()=>{localStorage.setItem("access_token","")}}className={cx('link')}>로그아웃</Link></li>)
    }
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
                    {/*내정보를 누르는 자는 죽음을 맞이할 지어다./*/}
                    {isLogin}
                </ul>
            </nav>
        </div>
    )
};

export default Header;