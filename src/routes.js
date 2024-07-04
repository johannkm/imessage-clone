import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage'; // Replace with actual React component
import FormPage from './pages/FormPage'; // Replace with actual React component
import DynamicRoutePage from './pages/DynamicRoutePage'; // Replace with actual React component

const routes = [
  {
    path: '/about/',
    component: AboutPage
  },
  {
    path: '/form/',
    component: FormPage
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage
  }
];

const Routes = () => (
  <Switch>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact
        render={(props) => <route.component {...props} />}
      />
    ))}
  </Switch>
);

export default Routes;
