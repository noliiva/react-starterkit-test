import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './utils/configureStore';
import registerServiceWorker from './utils/registerServiceWorker';
import App from './App';

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
