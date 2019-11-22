import React, {Component} from 'react';
import styles from './ApplyBody.scss';
import classNames from 'classnames/bind';
import {Button} from "../../common";
import axios from 'axios';

const cx = classNames.bind(styles);

class ApplyBody extends Component {

    constructor(props){
        super(props);
        this.state={
          imgUrl: '',
          relation: '부모',
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

          console.log(data);
    
            if(data.relation === '' || data.name === '' || data.gender === '' || data.age === undefined || data.age === null  || data.nation === '' || data.missDate === '' || data.missArea === '' || data.physicalPoint === '' || data.additional === '' || data.binary === ''){
              alert('입력한 정보를 다시 확인해주세요');
            } else {
                try{
                    axios.post(`http://172.26.0.34:8000/missing/post/`, data, {
                        headers: {
                            'Authorization': localStorage.getItem('access_token')
                        } 
                    }).then(res => {
                    console.log(res); 
                    if(res.status === 200){
                        alert('성공적으로 신청하였습니다.');
                    }
                    }).catch(err => {
                        console.error(err);
                        if(err.status === 400){
                            alert('입력정보를 다시 확인해주세요');
                        }
                    });
                    } catch(error) {
                        alert('오류가 발생했습니다.');
                    }
            }
        }
              
        handleSetImg = e => {
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
            <div className={cx('miss-report col-6')}>
                {/* <h2>실종자 신청</h2> */}
                <div className={cx('data-col')}>
                    <div className={cx('data col-6')}>
                        <div className={cx('data-type col-3')}>이름:</div>
                        <div className={cx('data-form col-9')}><input className={cx('input')} name="name" onChange={this.handleSetMissing} type="text"/></div>
                    </div>
                    <div className={cx('data col-6')}>
                        <div className={cx('data-type col-3')}>성별:</div>
                        <div className={cx('data-form col-9')}>
                            남 : <input id="nam" name="gender" value="man" type="radio" onChange={this.handleSetMissing}/>
                            여 : <input id="yeo" name="gender" value="woman" type="radio" onChange={this.handleSetMissing}/>
                        </div>
                    </div>
                </div>
                <div className={cx('data-col')}>
                    <div className={cx('data col-6')}>
                        <div className={cx('data-type col-3')}>나이:</div>
                        <div className={cx('data-form col-9')}><input className={cx('input')} name="age" onChange={this.handleSetMissing} type="text"/></div>
                    </div>
                    <div className={cx('data col-6')}>
                        <div className={cx('data-type col-3')}>국적:</div>
                        <div className={cx('data-form col-9')}><input className={cx('input')} name="nation" onChange={this.handleSetMissing} type="text"/></div>
                    </div>
                </div>
                <div className={cx('data-col col-12')}>
                    <div className={cx('data col-6')}>
                        <div className={cx('data-type col-3')}>실종날짜:</div>
                        <div className={cx('data-form col-9')}><input className={cx('input')} type="text" name="missDate" onChange={this.handleSetMissing}/></div>
                    </div>
                    <div className={cx('data col-6')}>
                        <div className={cx('data-type col-3')}>이미지:</div>
                        <div className={cx('data-form col-9')}><input type="file" accept="image/png, image/jpeg" onChange={this.handleSetImg}/></div>
                    </div>
                </div>
                <div className={cx('data-col col-12')}>
                    <div className={cx('data col-6')}>
                        <div className={cx('data-type col-3')}>실종지역:</div>
                        <div className={cx('data-form col-9')}><input className={cx('input')} type="text" name="missArea" onChange={this.handleSetMissing}/></div>
                    </div>
                    <div className={cx('data col-6')}>
                        <div className={cx('data-type col-3')}>관계:</div>
                        <div className={cx('data-form col-9')}>
                            <select name="relation" id="" defaultValue="부모" onChange={this.handleSetMissing}>
                                <option value="부모">부모</option>
                                <option value="자녀">자녀</option>
                                <option value="배우자">배우자</option>
                                <option value="친척">친척</option>
                                <option value="형제">형제</option>
                                <option value="동거자">동거자</option>
                                <option value="기타">기타</option>
                                <option value="지인">지인</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={cx('data-col col-12')}>
                    <div className={cx('data col-12')}>
                        <div className={cx('data-type')}>신체특징:</div>
                        <div className={cx('data-form')}><textarea className={cx('input char')} name="physicalPoint" onChange={this.handleSetMissing}/></div>
                    </div>
                </div>
                <div className={cx('data-col col-12')}>
                    <div className={cx('data col-12')}>
                        <div className={cx('data-type')}>신고내용:</div>
                        <div className={cx('data-form')}><textarea className={cx('input text')} name="additional" onChange={this.handleSetMissing}/></div>
                    </div>
                </div>
                <div className={cx('btn')}>
                    <Button onClick={this.handleSend}>신고하기</Button>
                </div>

            </div>


        );
    }
}

export default ApplyBody;