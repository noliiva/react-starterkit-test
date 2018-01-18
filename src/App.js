import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Root from './routes';

const App = ({ store }) => (
  <Provider store={store} >
    <Router>
      <Route exact path="/" component={Root} />
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App;
