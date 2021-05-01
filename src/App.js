import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import NasaPhoto from './components/NasaPhoto'
import MarsRover from './components/MarsRover'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" />
        <Route component={MarsRover} path="/marsrover" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
