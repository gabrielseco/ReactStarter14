import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'

import App from './Interfaces/App.jsx';
import Films from './Interfaces/Films.jsx';

const history = createBrowserHistory();

const store = configureStore()

try {

  require('../styles/main.scss');
  
  render((
    <Provider store={store}>
      <Router history={history}>
        <Route component={App}>
          <Route
          path="/"
          name="films"
          component={Films}
          store={store}
          />
        </Route>
      </Router>
    </Provider>
  ), document.getElementById('app'))
} catch(e) {
  ReactDOM.render(
    <div>
    <h2>Error: application could not load</h2>
    <pre>
    <strong>{e.toString()}</strong>
    {!!e.stack && (<div><br />{e.stack}</div>)}
    </pre>
    </div>, document.body
  );

  throw e;
}
