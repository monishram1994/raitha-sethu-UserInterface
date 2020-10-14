import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import routes from './routes';
import './App.css';

const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);

function App() {
  return (
    <Router>
    <div>      
      {routeComponents}        
    </div>
  </Router>
  );
}

export default App;
