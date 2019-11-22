import React, {Component} from 'react';
import styles from './MissList.scss';
import classNames from 'classnames/bind';
import {Link} from "react-router-dom";
import axios from 'axios';

const cx = classNames.bind(styles);

class MissCard extends Component {

    render() {
        return (
            <div>
                <Link to={"/list/" + this.props.id}>
                    <div className={cx('miss-card')}>
                        <div className={cx('profile')}>
                            <img src={this.props.binary} alt="눈 장애임?"/>
                        </div>
                        <div className={cx('miss-data')}>
                            <div className={cx('miss-top')}>
                                <div className={cx('name')}>
                                    <h4>
                                        {this.props.name}
                                    </h4>
                                </div>
                                <div className={cx('gender')}><p>{this.props.gender}</p></div>
                                <div className={cx('age')}><p>{this.props.age}</p></div>
                            </div>
                            <div className={cx('miss-mid')}>
                                <div className={cx('nation')}>국적: <p>{this.props.nation}</p></div>
                                <div className={cx('date')}>실종날짜: <p>{this.props.missDate}</p></div>
                                <div className={cx('area')}>지역: <p>{this.props.missArea}</p></div>
                                <div className={cx('physical')}>신체특징: <p>{this.props.physicalPoint}</p></div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

class MissList extends Component {

    state = {
        test: "",
    };

    componentDidMount() {
        axios.get('http://172.26.0.34:8000/missing/list/').then(res => {
            this.setState({miss: res.data});
            for (let i in this.state.miss) {
                this.setState({
                    test: [...this.state.test, this.state.miss[i]],
                })
                // console.log(this.state.miss[i])
            }
        }).catch(err => {
            console.error(err);
        });
    }


    render() {
        return (
            <div className={cx('miss-list')}>
                {this.state.test ? this.state.test.map(data => {
                    return (
                        <MissCard
                            key={data.id}
                            id={data.id}
                            name={data.name}
                            gender={data.gender}
                            age={data.age}
                            nation={data.nation}
                            missDate={data.missDate}
                            missArea={data.missArea}
                            physicalPoint={data.physicalPoint}
                            binary={data.binary}
                        />
                    )
                }) : ""}

            </div>
        )
    }
}

export default MissList;