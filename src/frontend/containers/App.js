import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Home from '../components/home/Home';
import Cv from '../components/cv/Cv';
import Repository from '../components/repository/Repository';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/cv' component={Cv}/>
        <Route exact path='/repository' component={Repository}/>
      </Switch>
    </div>
  );
}

export default App;
