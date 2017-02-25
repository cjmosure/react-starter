import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import Root from './Root';
import routes from './routes';


var store = createStore(() => {})

const renderApp = appRoutes => {
  render(
    <AppContainer>
      <Root routes={appRoutes} />
    </AppContainer>,
    document.querySelector("#app")
  );
};

renderApp(routes);

if (module.hot) {
  module.hot.accept()
}
