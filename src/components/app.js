import React, { Component } from 'react';
import NavBar from './navbar'
import Dashboard from './dashboard'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Dashboard />
      </div>
    )
  }
}
