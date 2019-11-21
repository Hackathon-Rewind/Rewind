import React, {Component} from 'react';
import styles from './ListSort.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class ListSort extends Component{
    sort = (e, target, model) => {
    };

    render() {
        return (
            <div className={cx('list-sort')}>
                <div>
                    접수일순
                    <span onClick={this.sort()}>▲</span>
                </div>
                <div>
                    실종날짜순
                    <span onClick={this.sort()}>▲</span>
                </div>
            </div>
        )
    }
}

export default ListSort;