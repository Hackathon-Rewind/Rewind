import React, { Component } from 'react';
import { Button } from '../../common';
import './ReportComponent.scss';
import axios from 'axios';

class ReportComponent extends Component {

  constructor(props){
    super(props);
    this.state={
      title: '',
      content: '',
      reportList: [],
    };
  }

  async componentDidMount(){
    await this.getReports();
    // this.setState({
    //   reportList: resultList
    // });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name, e.target.value);
  }

  getReports = async() => {
    try{
      await axios.get('http://172.26.0.34:8000/report/list/').then(res => {
        console.log(res);
        for(let i in res.data){
          this.setState({
              reportList:[...this.state.reportList,res.data[i]],
          });
        } 
        // return res.data;
      }).catch(err => {
        console.error(err);
      });
    } catch(err) {
      console.error(err);
      alert('오류가 발생했습니다');
    }
  }

  handleSend = () => {
    const { title, content } = this.state;
    const data = {
      title: title,
      text: content
    }
    axios.post('http://172.26.0.34:8000/report/post/', data, {
      headers: {
        'Authorization': localStorage.getItem('access_token')
      }
    }).then(res => {
      console.log(res);
      if(res.status === 200){
        alert('성공적으로 올렸습니다.');
        window.location.reload();
      }
    }).catch(err => {
      console.error(err);
    });
  }

  render() {
    const { reportList } = this.state;

    console.log(reportList);

    const reportShow = reportList.map(item => {
      return (
      <div className="items">
        <div className="items-title">제목: {item.title}</div>
        <div className="items-text">내용: {item.text}</div>
      </div>
      )
    });

    return (
      <div className="Report">
        <div className="Report-inputs">
          <p className="Report-inputs-subTitle">제목</p>
          <input placeholder="제목입력" className="Report-inputs-title" name="title" onChange={this.handleChange}/>
          <p className="Report-inputs-subContent">내용</p>
          <textarea placeholder="내용입력" className="Report-inputs-content" name="content" onChange={this.handleChange}/>
          <div className="Report-inputs-button">
            <Button onClick={this.handleSend} children={"제보하기"}/>
          </div>
        </div>
        <div className="Report-contents">
          {reportShow}
        </div>
      </div>
    );
  }
}

export default ReportComponent;