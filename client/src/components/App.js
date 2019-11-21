import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {MainPage, NotFoundPage, ReportPage, ApplyPage} from "../pages";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/report" component={ReportPage}/>
                <Route exact path="/apply" component={ApplyPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    )
};

export default App;