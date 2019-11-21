import React from 'react'
import './Login.css';
import axios from 'axios';
import img from '../../../images/loginBackground.png'
import human from '../../../images/human.png'
import key from '../../../images/key.png'
import { Link } from 'react-router-dom'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.IdInput = React.createRef();
        this.PasswordInput = React.createRef();
    }

    ButtonClick = ()=>{
        this.LoginToServer();
    }

    PressKey = (e)=>{
        if(e.key === "Enter"){
            this.LoginToServer();
        }
    }

    LoginToServer = () =>{
        console.log(this.IdInput.current.value , this.PasswordInput.current.value);
        axios({
            method:"POST",
            url:"http://172.26.0.34:8000/user/login/",
            data:{
                userId:this.IdInput.current.value,
                userPw:this.PasswordInput.current.value
            },
        }).then((req)=>{
            localStorage.setItem("access_token",req.data.access_token);
            window.location.href="/list"
        }).catch((e)=>{
            console.log(e);
            alert("오류가 있습니다.");
        })
    }

    render(){
        return(
            <>
            <img src={img} alt = "strip" id="LoginBakcground"/>
                <div id="LoginDiv">
                    <div id="LoginWrapper">
                        <div id="Loginflex">
                            <div id="LoginTitle"><p>Login</p></div>
                            <div className="LoginInputDiv">
                                <img src={human} alt="" className="LoginInputImg"/>
                                <input type="text" onKeyPress={this.PressKey} ref={this.IdInput} placeholder="아이디" className="LoginInput" id="LoginId"/>
                            </div>
                            <div className="LoginInputDiv">
                                <img src={key} alt="" className="LoginInputImg"/>
                                <input type="password" onKeyPress={this.PressKey} ref={this.PasswordInput} placeholder="비밀번호" className="LoginInput"id="LoginPassword"/>
                            </div>
                            
                            <input type="button" onClick={this.ButtonClick} className="LoginButton" value="로그인"/>
                            <input type="button" onClick={this.ButtonClick} className="LoginButton" value="기관으로 로그인"/>
                            {/* <input type="button" value="forgot your id? find ID" className="LoginHelpButton"/> */}
                            <Link to="/signup">
                                <input type="button" value="Sign-up" className="LoginHelpButton"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;