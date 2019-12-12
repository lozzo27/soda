import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Home from '../components/home/Home';
import { Switch, Route } from 'react-router-dom';
import logo from '../../img/logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route exact path='/home' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
