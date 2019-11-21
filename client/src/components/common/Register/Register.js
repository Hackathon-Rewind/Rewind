import React from 'react'
import axios from 'axios'
import './Register.css'

class Register extends React.Component{
  render(){  
    const RegisterInfo = {
      Name : React.createRef(),
      PhoneNumber : React.createRef(),
      Id : React.createRef(),
      Password : React.createRef(),
      PasswordCheck : React.createRef(),
      Kind : React.createRef(),
    }

    return(
      <div id="Register">
        <div id="RegisterWrapper">
          <p id="RegisterTitle">대충 회원가입 이라는 말 ^^7</p>
          <input type="text" ref={RegisterInfo.Name} id="RegisterName" className="RegisterInput"/>
          <input type="text" ref={RegisterInfo.PhoneNumber} id="RegisterPhoneNum" className="RegisterInput"/>
          <input type="text" ref={RegisterInfo.Id} id="RegisterId" className="RegisterInput"/>
          <input type="text" ref={RegisterInfo.Password} id="RegisterPassword" className="RegisterInput"/>
          <input type="text" ref={RegisterInfo.PasswordCheck} id="RegisterPasswordCheck" className="RegisterInput"/>
        </div>
      </div>
    );
  }
}

export default Register;