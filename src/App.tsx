import * as React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routing';

import Header from './components/header';
import LoadingProvider from './components/loader/loadingProvider';

import './App.scss';

const App: React.FC = () => {

  return (
    <LoadingProvider>
      <Router>
      <Header />
        <Switch>
          {routes.map(route => {
            return <Route {...route} />;
          })}
        </Switch>
      </Router>
    </LoadingProvider>
  )
}

export default App;