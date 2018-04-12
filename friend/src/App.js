import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import FriendsList from './components/FriendsList';

class App extends Component {
  render() {
    return (
      <div>
      <div className="title"> 
        <h1>Lambda Friends</h1> 
      </div>
      
      <Route exact path='/' component={FriendsList} />
      
      </div>
    );
  }
}


export default App;