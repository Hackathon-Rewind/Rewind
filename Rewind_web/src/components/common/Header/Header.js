import React from 'react';
import {Link} from "react-router-dom";
import styles from './Header.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('header col-12')}>
<nav className={cx('container')}>
<ul className={cx('main-list')}>
<Link to="/">
        <div className={cx('logo')}>로고일겁니다</div>
    </Link>
    <li><Link to="/list" className={cx('link')}>실종자 찾기</Link></li>
    <li><Link to="/report" className={cx('link')}>실종자 신청</Link></li>
    <li><Link to="/제보" className={cx('link')}>제보하기</Link></li>
    <li><Link to="/mypage" className={cx('link')}>내정보</Link></li>
    <li><Link to="/로그아웃" className={cx('link')}>로그아웃</Link></li>
</ul>
    </nav>
    </div>
)
};

export default Header;