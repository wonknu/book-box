import * as React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routing';

import Header from './components/header';
import LoadingProvider from './components/loader/loadingProvider';

import ModalContext from './components/modal/ModalContext';

import './App.scss';
import ModalProvider from './components/modal/ModalProvider';

const App: React.FC = () => {
  return (
    <LoadingProvider>
      <ModalProvider>
        <Router>
        <ModalContext.Consumer>
          {({ component: Component, props, hideModal }) => {
            console.log('====================================');
            console.log(Component);
            console.log('====================================');
            return null
            // return Component ? <Component {...props} onRequestClose={hideModal} /> : null
          }}
        </ModalContext.Consumer>
        <Header />
          <Switch>
            {routes.map(route => {
              return <Route {...route} />;
            })}
          </Switch>

        </Router>
      </ModalProvider>
    </LoadingProvider>
  )
}

export default App;