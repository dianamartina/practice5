import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import {Route, Switch } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={Home}  exact/>
        <Route path="/about" component={About}/>
        <Route path="*" component={Page404}/>
      </Switch>
      
    </div>
  );
}

export default App;