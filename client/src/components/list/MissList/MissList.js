import React, {Component} from 'react';
import styles from './MissList.scss';
import classNames from 'classnames/bind';
import {Link} from "react-router-dom";

const cx = classNames.bind(styles);

class MissCard extends Component {
    render() {
        return (
            <div className={cx('miss-card')}>
                <div className={cx('profile')}>
                    <img src={this.props.image} alt="눈 장애임?"/>
                </div>
                <div className={cx('miss-data')}>
                    <div className={cx('miss-top')}>
                        <div className={cx('name')}>
                            <h4>
                                <Link to={"/list/" + this.props.idx} onClick={this.onClickData}>
                                    {this.props.name}
                                </Link>
                            </h4>
                        </div>
                        <div className={cx('gender')}><p>{this.props.gender}</p></div>
                        <div className={cx('age')}><p>{this.props.age}</p></div>
                    </div>
                    <div className={cx('miss-mid')}>
                        <div className={cx('nation')}>국적: <p>{this.props.nation}</p></div>
                        <div className={cx('date')}>실종날짜: <p>{this.props.date}</p></div>
                        <div className={cx('area')}>지역: <p>{this.props.area}</p></div>
                        <div className={cx('physical')}>신체특징: <p>{this.props.point}</p></div>
                    </div>
                </div>
            </div>
        )
    }
}

class MissList extends Component {
    state = {
        miss: ""
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({miss: res}))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/post');
        const body = await response.json();
        return body;
    };

    render() {
        return (
            <div className={cx('miss-list')}>
                {this.state.miss ? this.state.miss.map(data => {
                    return (
                        <MissCard
                            key={data.idx}
                            idx={data.idx}
                            name={data.name}
                            gender={data.gender}
                            age={data.age}
                            nation={data.nation}
                            date={data.date}
                            area={data.area}
                            point={data.point}
                            image={data.image}
                        />
                    )
                }) : ""}

            </div>
        )
    }
}

export default MissList;