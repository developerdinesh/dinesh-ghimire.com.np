import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Error404 from '../pages/404/Error404';

// Define a custom type for Route component props with the 'exact' property
interface CustomRouteProps {
  exact?: boolean;
  path: string;
  // Use render or children prop instead of component prop
  render: () => JSX.Element;
}

const Routes: React.FC = () => {
  return (
    <Router>
      <RouteWithExactPath exact path="/" render={() => <Home />} />
      <RouteWithExactPath exact path="/about" render={() => <About />} />
      {/* Add more routes here */}
      <Route path="*" render={() => <Error404 />} />
    </Router>
  );
};

// Define a custom Route component with the custom props type
const RouteWithExactPath: React.FC<CustomRouteProps> = ({ exact, path, render }) => {
  return <Route exact={exact} path={path} render={render} />;
};

export default Routes;
