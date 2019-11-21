import React from 'react'
import axios from 'axios'
import './Register.css'
import loginBackground from '../../../images/loginBackground.png'
import human from '../../../images/human.png'
import identification from '../../../images/identification.png'
import key from '../../../images/key.png'
import telephone from '../../../images/telephone.png'

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ImgUrl : "",
      load:false,
    }
  }
  getFile = (Img,place)=>{
    let dataURL;
    let reader = new FileReader();
    reader.onload = ()=>{
      dataURL = reader.result;
      console.log(place);
      place.current.src = dataURL;
      this.setState({
        ImgUrl:dataURL,
      })
    };
    reader.readAsDataURL(Img.current.files[0]);
  }

  render(){  
    const RegisterInfo = {
      Name : React.createRef(),
      PhoneNumber : React.createRef(),
      Id : React.createRef(),
      Password : React.createRef(),
      PasswordCheck : React.createRef(),
      Kind : 0,
      Img: React.createRef(),
      // ImgUrl:"",
    }
    
    let place = React.createRef();

    return(
      <div id="RegisterDiv">
        <img src={loginBackground} alt="" id="RegisterBackground"/>
        <div id="RegisterWrapper">
          <p id="RegisterTitle">Sign-up</p>
          <div className="RegisterInputDiv">
            <img src={identification} alt="" className="RegisterInputImg"/>
            <input type="text" placeholder="이름" ref={RegisterInfo.Name} className="RegisterInput"/>
          </div>
          <div className="RegisterInputDiv">
            <img src={telephone} alt="" className="RegisterInputImg"/>
            <input type="text" placeholder="전화번호" ref={RegisterInfo.PhoneNumber} className="RegisterInput"/>
          </div>
          <div className="RegisterInputDiv">
            <img src={human} alt="" className="RegisterInputImg"/>
            <input type="text" placeholder="아이디" ref={RegisterInfo.Id} className="RegisterInput"/>
          </div>
          <div className="RegisterInputDiv">
            <img src={key} alt="" className="RegisterInputImg"/>
            <input type="password" placeholder="비밀번호" ref={RegisterInfo.Password} className="RegisterInput"/>
          </div>
          <div className="RegisterInputDiv">
            <img src={key} alt="" className="RegisterInputImg"/>
            <input type="password" placeholder="비밀번호 확인" ref={RegisterInfo.PasswordCheck} className="RegisterInput"/>
          </div>

          <div id="RegisterImgDiv">
            <img id="RegisterImg" src="https://i5.walmartimages.com/asr/6d1014f4-682b-4720-818a-615f754e923d_1.ee2acf1cc97d6ac3258af5453afac656.jpeg" alt="user img" ref={place}/>
            <input accept=".jpg,.jpeg,.png" id="RegisterImgInput" type="file" onChange={()=>{this.getFile(RegisterInfo.Img,place);}} ref={RegisterInfo.Img}/>
          </div>

          <div>
            <label className="RegisterCheckBox">일반회원<input type="radio" name="kind" onChange={()=>{RegisterInfo.Kind = 0}} checked/></label>
            <label className="RegisterCheckBox">기업회원<input type="radio" name="kind" onChange={()=>{RegisterInfo.Kind = 1}}/></label>
          </div>  
          <input className="RegisterButton" type="button" value="회원가입" onClick={()=>{
            console.log(RegisterInfo.PhoneNumber.current.value)
            let PhoneNumber = RegisterInfo.PhoneNumber.current.value;
            PhoneNumber = PhoneNumber.substr(0,3)+"-"+ PhoneNumber.substr(3,4)+"-" + PhoneNumber.substr(7,4);
            axios("http://172.26.0.34:8000/user/signup/",{
              method:"POST",
              data:{
                userId:RegisterInfo.Id.current.value,
                userPw:RegisterInfo.Password.current.value,
                userName:RegisterInfo.Name.current.value,
                userPhone:PhoneNumber,
                binary:this.state.ImgUrl,
                userInfo:RegisterInfo.Kind,
              }
            })
            .then((req)=>{
              window.location.href="/list"
            })
          }}/>
        </div>
      </div>
    );
  }
}

export default Register;