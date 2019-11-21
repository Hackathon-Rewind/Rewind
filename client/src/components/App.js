import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {MainPage, NotFoundPage, ReportPage, ApplyPage, MissingPage} from "../pages";
import ListPage from "../pages/ListPage";
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
                <Route exact path="/login" component={<></>}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    )
};

export default App;