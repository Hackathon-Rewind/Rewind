import React, {Component} from 'react';
import {PageTemplate} from "../components/common";
import Info from "../components/MyInfo/Info";
import axios from "axios";

class MyPage extends Component {
    state = {
        user : ""
    };

    async componentDidMount() {
        await axios.get('http://172.26.0.34:8000/user/my/', {
            headers: {
                'Authorization': localStorage.getItem('access_token')
            }
        }).then(res => {
            console.log(res);
            this.setState({user: res.data});
            for(let i in this.state.user){
                this.setState({
                    user:[...this.state.user,this.state.user[i]],
                });
                console.log(this.state.user[i])
            }
        }).catch(err => {
            console.error(err);
        });
    }
    render() {
        return (
            <PageTemplate>
                <div className="container">
                    <Info
                        name={this.state.user.name}
                        phone={this.state.user.phone}
                    />
                </div>
            </PageTemplate>
        )
    }
}

export default MyPage;