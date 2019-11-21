import React, { Component } from 'react';
import axios from 'axios';
import { Button } from '../common';

class ApplyComponent extends Component {

  constructor(props){
    super(props);
    this.state={
      imgUrl: '',
      relation: '',
      name: '',
      gender: '',
      age: null,
      nation: '',
      missDate: '',
      missArea: '',
      physicalPoint: '',
      additional: '',
    };
  }

    handleSend = () => {
      const { imgUrl, relation, name, gender, age, nation, missDate, missArea, physicalPoint, additional} = this.state;

      const data = {
        relation: relation,
        name: name,
        gender: gender,
        age: parseInt(age),
        nation: nation,
        missDate: missDate,
        missArea: missArea,
        physicalPoint: physicalPoint,
        additional: additional,
        binary: imgUrl
      };

      try{
        if(data.relation === '' || data.name === '' || data.gender === '' || data.age === undefined || data.age === null  || data.nation === '' || data.missDate === '' || data.missArea === '' || data.physicalPoint === '' || data.additional === ''){
          alert('입력한 정보를 다시 확인해주세요');
        } else {
          axios.post(`http://172.26.0.34:8000/missing/post/`, data, {
            headers: {
                'Authorization': localStorage.getItem('access_token')
              }
          }).then(res => {
          console.log(res); 
          }).catch(err => {
            console.error(err);
            console.log(err);
            if(err.status === 400){
              alert('입력정보를 다시 확인해주세요');
            }
          });
        }
      } catch(error) {
        alert('오류가 발생했습니다.');
      }

      
    }
          
    handleSetImg = async(e) => {
      let reader = new FileReader();
      reader.onload = () => {
        let dataUrl = reader.result;
        this.setState({
          imgUrl: dataUrl
        });
      }
      reader.readAsDataURL(e.target.files[0]);
    }

    handleSetMissing = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

  render() {
    return (
      <div>
        실종자 신청
        <input type="file" accept="image/png, image/jpeg" name="imgFile" onChange={this.handleSetImg}/>
        <label>
          <input placeholder="이름" name="name" onChange={this.handleSetMissing}/>
        </label>
        <label>
          <input placeholder="관계" name="relation" onChange={this.handleSetMissing}/>
        </label>
        <label>
          <input placeholder="성" name="gender" onChange={this.handleSetMissing}/>
        </label>
        <label>
          <input placeholder="나이" name="age" onChange={this.handleSetMissing}/>
        </label>
        <label>
          <input placeholder="국적" name="nation" onChange={this.handleSetMissing}/>
        </label>
        <label>
          <input placeholder="실종날짜" name="missDate" onChange={this.handleSetMissing}/>
        </label>
        <label>
          <input placeholder="실종지역" name="missArea" onChange={this.handleSetMissing}/>
        </label>
        <label>
          <input placeholder="특징" name="physicalPoint" onChange={this.handleSetMissing}/>
        </label>
        <label>
          <input placeholder="추가내용" name="additional" onChange={this.handleSetMissing}/>
        </label>

        <Button onClick={this.handleSend} children={"실종자 신청하기"}/>
      </div>
    );
  }
}

// userId, relation, name, gender, age, nation, missDate, area, point, postDate,
// profile, content

export default ApplyComponent;