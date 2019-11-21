import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {MainPage, NotFoundPage, ReportPage} from "../pages";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/report" component={ReportPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    )
};

export default App;