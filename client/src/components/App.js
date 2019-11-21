import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {MainPage, NotFoundPage} from "../pages";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    )
};

export default App;