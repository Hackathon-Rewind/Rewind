import React from 'react';
import { Switch, Route /* Redirect */ } from 'react-router-dom';
import { MainPage } from 'pages';

const App = () => {
  return (
    <Switch>
      <Route
        exact
        path={'/'}
        render={() => <MainPage />}
      />
    </Switch>
  );
};

export default App;
