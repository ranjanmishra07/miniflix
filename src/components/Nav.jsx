import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Display from './Display';
import Upload from './Upload';

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Miniflix</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/display" component={Display}>display Videos</Link>
          </li>
          <li>
          <Link to="/upload" component={Upload}>upload</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;