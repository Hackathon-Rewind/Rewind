// import React, {useState} from 'react';
import React from 'react';
import styles from './MissPost.scss';
import classNames from 'classnames/bind';
import {Button} from "../../common";

const cx = classNames.bind(styles);

const MissPost = ({children}) => {
    // const [qwer , setqewr] = useState(false);
    //
    // const onClickPromotion = () => {
    //     setqewr(true);
    // };

    return (
        <div className={cx('miss-post ')}>
            <div className={cx('wrap col-8')}>
                <div className={cx('row')}>
                    <div className={cx('left')}>
                        <div className={cx('image col-3')}>
                            <img src={children.binary} alt=""/>
                        </div>
                        <Button to={children.id}>홍보하기</Button>
                    </div>
                    <div className={cx('missing col-12')}>
                        <div className={cx('miss-head col-12')}>
                            <h3>{children.name}</h3><h3>({children.gender})</h3>
                        </div>
                        <div className={cx('missing-data col-12')}>
                            <p>당시나이 4세</p><p>현재나이 {children.age}</p>
                        </div>
                        <div className={cx('missing-data col-12')}>
                            <p>국적 {children.nation}</p><p>발생장소 {children.missArea}</p>
                        </div>
                        <div className={cx('missing-data col-12')}>
                            <p>발생일시 {children.missDate}</p><p>발생장소 {children.missArea}</p>
                        </div>
                        <div className={cx('missing-data col-12')}>
                            <p>신체특징 {children.physicalPoint}</p>
                        </div>
                    </div>
                </div>
                <div className={cx('additional col-12')}>
                    {children.additional}
                </div>

            </div>
            {/*{*/}
            {/*    qwer ? (*/}
            {/*        <div id="promotion" className={cx('col-12')}>*/}
            {/*            asdf*/}
            {/*        </div>*/}
            {/*    ) : <></>*/}
            {/*}*/}

        </div>
    )
};

export default MissPost;