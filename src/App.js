import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './Layout/Index';
import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
