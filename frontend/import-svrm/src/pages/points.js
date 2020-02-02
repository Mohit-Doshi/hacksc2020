import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import firebaseWrapper from '../firebaseWrapper';

ReactDOM.render(<Menu />, document.getElementById('menu'));
firebaseWrapper.getUser(localStorage.getItem("userid")).then((userid) => {
    document.getElementById("pointNum").innerText = userid.points
})
