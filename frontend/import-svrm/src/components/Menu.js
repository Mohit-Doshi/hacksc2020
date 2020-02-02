import React, { Component } from 'react';
import style from './Menu.css';
import SignIn from './SignIn';
import ListItems from './ListItems';

// const LoginContext = React.createContext(false)

export default class Menu extends Component {
  render() {
    return (
      <ul className={style.Menu}>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/uploader.html">Uploader</a></li>
        <li><a href="/reviewer.html">Reviewer</a></li>
        <li><a href="/transpocredit.html">Transportation Credit</a></li>
        <li><a href="/points.html">Points</a></li>
        
          <SignIn/>
          <ListItems></ListItems>
        
        
      </ul>
    );
  }
}
