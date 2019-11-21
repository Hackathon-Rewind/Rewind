import React, { Component } from 'react';
import { Button } from '../../common';
import axios from 'axios';

class ReportComponent extends Component {

  constructor(props){
    super(props);
    this.state={
      title: '',
      content: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name, e.target.value);
  }

  handleSend = () => {
    const { title, content } = this.state;
    const data = {
      title: title,
      content: content
    }
    axios.post('172.26.0.34:8080/', data, {
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    });
  }

  render() {
    return (
      <div>
        <input placeholder="제목입력" name="title" onChange={this.handleChange}/>
        <input placeholder="내용입력" name="content" onChange={this.handleChange}/>
        <Button onClick={this.handleSend} children={"제보하기"}/>
      </div>
    );
  }
}

export default ReportComponent;