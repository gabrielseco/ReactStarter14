import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import App from './App.jsx';

main();

function main() {

  ReactDOM.render(<App />, document.getElementById('app'));

}

/*try {

    //require('../../styles/main.scss');

    //const flux = new AppFlux();

    const Route = Router.Route,
        DefaultRoute = Router.DefaultRoute;

    var Interfaces = (
      <Route name="home" path="/" handler={App}>
        <DefaultRoute handler={App} />

      </Route>
    );

    Router.run(Interfaces, function (Handler) {
        React.render(<Handler />, document.body);
    });
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
}*/
