import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {
    MainPage,
    NotFoundPage,
    ReportPage,
    ApplyPage,
    MissingPage,
    ListPage,
    MyPage,
    LoginPage,
    PromotionPage,
    RegisterPage
} from "../pages";
const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/report" component={ReportPage}/>
                <Route exact path="/apply" component={ApplyPage}/>
                <Route exact path="/list" component={ListPage}/>
                <Route exact path="/list/page/:page" component={ListPage}/>
                <Route exact path="/list/:id" component={MissingPage}/>
                <Route exact path="/list/:id/:id" component={PromotionPage}/>
                {/*<Route exact path="/mypage" component={MyPage}/>*/}
                <Route exact path="/login" component={LoginPage}/>
                <Route eact path="/register" component={RegisterPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    )
};

export default App;