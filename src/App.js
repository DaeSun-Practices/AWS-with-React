import React, {Component} from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'

Amplify.configure(awsconfig)
class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <AmplifySignOut/>
          <h2>My App</h2>
        </header>
      </div>
    );
  } 
}

export default withAuthenticator(App);
