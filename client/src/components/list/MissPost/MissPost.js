import React from 'react';
import styles from './MissPost.scss';
import classNames from 'classnames/bind';
import {Button} from "../../common";

const cx = classNames.bind(styles);

const MissPost = () => {
    return (
        <div className={cx('miss-post ')}>
            <div className={cx('wrap col-8')}>
                <div className={cx('row')}>
                    <div className={cx('left')}>
                        <div className={cx('image col-3')}/>
                        <Button to="/report">제보하기</Button>
                    </div>
                    <div className={cx('missing col-12')}>
                        <div className={cx('miss-head col-12')}>
                            <h3>이규진</h3><h3>(남자)</h3>
                        </div>
                        <div className={cx('missing-data col-12')}>
                            <p>당시나이 4세</p><p>현재나이 23세</p>
                        </div>

                        <div className={cx('missing-data col-12')}>
                            <p>발생일시2000년 04월 07일</p><p>발생장소 대구 달서 진천</p>
                        </div>
                        <div className={cx('missing-data col-12')}>
                            <p>몸무게 18kg</p><p>체격 비만</p>
                        </div>
                        <div className={cx('missing-data col-12')}>
                            <p>얼굴형 둥근형</p> <p>두발색상 흑색</p>
                        </div>
                        <div className={cx('missing-data col-12')}>
                            <p>두발형태 스포츠형</p><p>착의사항 기타</p>
                        </div>
                    </div>
                </div>
                <div className={cx('additional col-12')}>
                    앙 기모띠
                </div>

            </div>
        </div>
    )
};

export default MissPost;