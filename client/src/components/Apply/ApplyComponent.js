import React, { Component } from 'react';
import axios from 'axios';
import { Button } from '../common';

class ApplyComponent extends Component {

  constructor(props){
    super(props);
    this.state={
      imgFile: {}
    };
  }

handleSend = () => {
  const { imgFile} = this.state;

  const data = {
    relation: '부',
    name: '박건우',
    gender: 'woman',
    age: 18,
    nation: '대한민국',
    missDate: '2019/07/21',
    missArea: '대전',
    physicalPoint: '키가 큼',
    additional: '보면 연락 주세요 띠링띠링',
    binary: window.btoa(imgFile.name)
  };

  axios.post(`http://172.26.0.34:8000/missing/post/`, data, {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.error(err);
  });
}

handleSetImg = e => {
  console.log(e.target.files[0]);
  this.setState({
    imgFile: e.target.files[0]
  })
}

  render() {
    return (
      <div>
        실종자 신청
        <input type="file" accept="image/png, image/jpeg" onChange={this.handleSetImg}/>
        <Button onClick={this.handleSend} children={"실종자 신청하기"}/>
      </div>
    );
  }
}

// userId, relation, name, gender, age, nation, missDate, area, point, postDate,
// profile, content

export default ApplyComponent;