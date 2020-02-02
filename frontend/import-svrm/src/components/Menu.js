import React, { Component } from 'react';
import style from './Menu.css';

// const LoginContext = React.createContext(false)

export default class Menu extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/uploader.html">Uploader</a></li>
            <li><a href="/reviewer.html">Reviewer</a></li>
            <li><a href="/transpocredit.html">Transportation Credit</a></li>
            <li><a href="/points.html">Points</a></li>
            <li><a href="/map-view.html">Map view</a></li>
          </ul>
        </nav>
        <br /> 
      </div>
    );
  }
}
