import React from 'react';
import person from './images/person.jpg';
import './LostPersonInfo.css';

const LostPersonInfo = () => {
    return (
        <div className="lost-people-list">
            <div className="lost-person-info">
                <img className="person-image" src={person} alt="" />
                <div className="person-info">
                    <h4>모르는 사람</h4>
                    <p>대전광역시 유성구</p>
                </div>
            </div>
            <div className="lost-person-info">
                <img className="person-image" src={person} alt="" />
                <div className="person-info">
                    <h4>모르는 사람</h4>
                    <p>대전광역시 유성구</p>
                </div>
            </div>
            <div className="lost-person-info">
                <img className="person-image" src={person} alt="" />
                <div className="person-info">
                    <h4>모르는 사람</h4>
                    <p>대전광역시 유성구</p>
                </div>
            </div>
            <div className="lost-person-info">
                <img className="person-image" src={person} alt="" />
                <div className="person-info">
                    <h4>모르는 사람</h4>
                    <p>대전광역시 유성구</p>
                </div>
            </div>
            <div className="lost-person-info">
                <img className="person-image" src={person} alt="" />
                <div className="person-info">
                    <h4>모르는 사람</h4>
                    <p>대전광역시 유성구</p>
                </div>
            </div>
        </div>
    );
};

export default LostPersonInfo;