import React from 'react';
import './App.css';
import { Icon } from '@iconify/react';
import Accounts from './components/Accounts/Accounts';
import Home from './pages/Home';
import { browserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <nav className='Nav'>
        <Icon icon="mdi:netflix" color="red" width="50" height="50" />
      </nav>
      <div className='Container'>
        <h1>Who's watching?</h1>
        <div className='Row'>
          <Accounts name="Michael"/>
          <Accounts name="Franklin" />
          <Accounts name="Trevor" />
          <Accounts name="Lester" />
        </div>
      </div>
    </div>
  );
}

export default App;
