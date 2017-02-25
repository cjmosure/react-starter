import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout from './layout/layout.component.jsx';
import Homepage from './pages/homepage/homepage.component.jsx';
import NotFound from './layout/notfound.component.jsx';


const routes = () => {
  return (
    <Route path='/' component={Layout}>
      <IndexRoute component={Homepage} />
      <Route path='*' component={NotFound} />
    </Route>
  );
};

export default routes;
