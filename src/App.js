import React, { Component } from 'react';
// import { Router, Route } from 'react-router';
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Upload from './components/Upload';
import Display from './components/Display';
import './App.css';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="container">
      <Router >
        <div>
        <Route exact path="/" component={Nav}/>
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/display" component={Display} />
        </div>
      </Router>
    </div>
    );
  }
}

export default App;
