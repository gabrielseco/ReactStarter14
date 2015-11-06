import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route} from 'react-router'
import App from './Interfaces/App.jsx';


try {

  require('../styles/main.scss');

  render((
    <Router>
      <Route path="/" component={App}>
      </Route>
      <Route path="prueba" component={App}>
      </Route>
    </Router>
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
