import React, {Component} from 'react';
import {PageTemplate} from "../components/common";
import Info from "../components/MyInfo/Info";
import axios from "axios";

class MyPage extends Component {
    state = {
        user : []
    };

    async componentDidMount() {
        await axios.get('http://172.26.0.34:8000/user/my/', {
            headers: {
                'Authorization': localStorage.getItem('access_token')
            }
        }).then(res => {
            console.log(res);
            for(let i in res.data){
                this.setState({
                    user: [...this.state.user,res.data[i]],
                });
            }
        }).catch(err => {
            console.error(err);
        });
    }

    render() {
        const writtenArticle = this.state.user[3];
        if(writtenArticle !== null && typeof writtenArticle !== undefined && this.state.user.length >= 4) {
            var tempState = this.state.user[3];
            var writtenArticleKey = Object.keys(writtenArticle);
            return (
                <PageTemplate>
                    <div className="container">
                        {writtenArticleKey.map((element) => {
                            return (
                                <Info
                                    missing_list={tempState[element]}
                                />
                            )
                        })}
                    </div>
                </PageTemplate>
            )
        } else {
            return (
                <PageTemplate>
                </PageTemplate>
            )
        }

    }
}

export default MyPage;