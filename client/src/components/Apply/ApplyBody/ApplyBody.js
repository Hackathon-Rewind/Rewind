import React, {Component} from 'react';
import styles from './ApplyBody.scss';
import classNames from 'classnames/bind';
import {Button} from "../../common";

const cx = classNames.bind(styles);

class ApplyBody extends Component {
    render() {
        return (
            <div className={cx('miss-report col-6')}>
                {/*<h2>신고자 신고</h2>*/}
                <div className={cx('data-col')}>
                    <div className={cx('data col-6')}>
                        <div className={cx('data-type col-3')}>이름:</div>
                        <div className={cx('data-form col-9')}><input className={cx('input')} type="text"/></div>
                    </div>
                    <div className={cx('data col-6')}>
                        <div className={cx('data-type col-3')}>성별:</div>
                        <div className={cx('data-form col-9')}>
                            남 : <input id="nam" type="checkbox"/>
                            여 : <input id="yeo" type="checkbox"/>
                        </div>
                    </div>
                </div>
                <div className={cx('data-col')}>
                    <div className={cx('data col-6')}>
                        <div className={cx('data-type col-3')}>생일:</div>
                        <div className={cx('data-form col-9')}><input className={cx('input')} type="text"/></div>
                    </div>
                    <div className={cx('data col-6')}>
                        <div className={cx('data-type col-3')}>국적:</div>
                        <div className={cx('data-form col-9')}><input className={cx('input')} type="text"/></div>
                    </div>
                </div>
                <div className={cx('data-col col-12')}>
                    <div className={cx('data col-6')}>
                        <div className={cx('data-type col-3')}>실종날짜:</div>
                        <div className={cx('data-form col-9')}><input className={cx('input')} type="text"/></div>
                    </div>
                    <div className={cx('data col-6')}>
                        <div className={cx('data-type col-3')}>이미지:</div>
                        <div className={cx('data-form col-9')}><input type="file"/></div>
                    </div>
                </div>
                <div className={cx('data-col col-12')}>
                    <div className={cx('data col-6')}>
                        <div className={cx('data-type col-3')}>실종지역:</div>
                        <div className={cx('data-form col-9')}><input className={cx('input')} type="text"/></div>
                    </div>
                    <div className={cx('data col-6')}>
                        <div className={cx('data-type col-3')}>관계:</div>
                        <div className={cx('data-form col-9')}>
                            <select name="" id="">
                                <option value="1">부모</option>
                                <option value="2">자녀</option>
                                <option value="3">배우자</option>
                                <option value="4">친척</option>
                                <option value="5">형제</option>
                                <option value="6">동거자</option>
                                <option value="7">기타</option>
                                <option value="8">지인</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={cx('data-col col-12')}>
                    <div className={cx('data col-12')}>
                        <div className={cx('data-type')}>신체특징:</div>
                        <div className={cx('data-form')}><textarea className={cx('input char')}/></div>
                    </div>
                </div>
                <div className={cx('data-col col-12')}>
                    <div className={cx('data col-12')}>
                        <div className={cx('data-type')}>신고내용:</div>
                        <div className={cx('data-form')}><textarea className={cx('input text')}/></div>
                    </div>
                </div>
                <div className={cx('btn')}>
                    <Button disabled>신고하기</Button>
                </div>

            </div>


        );
    }
}

export default ApplyBody;