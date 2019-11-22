import React, {Component} from 'react';
import styles from './Info.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class Info extends Component {
    render() {
        return (
            <div className={cx('info')}>
                <div className={cx('wrap')}>
                    {JSON.stringify(this.props.missing_list)}
                </div>
            </div>
        )
    }
}

export default Info;