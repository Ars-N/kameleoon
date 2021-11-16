import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Finalize from './pages/Finalize';
import Results from './pages/Results';

const App: FC = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route
          path="/finalize/:id"
          render={({ match }) => {
            return <Finalize id={match.params.id} />;
          }}
        />
        <Route
          path="/results/:id"
          render={({ match }) => {
            return <Results id={match.params.id} />;
          }}
        />

        {/* <Route */}
        {/*  render={() => ( */}
        {/*    <div style={{ color: 'red', textAlign: 'center', fontSize: '25px' }}>Error 404!!!</div> */}
        {/*  )} */}
        {/* /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
