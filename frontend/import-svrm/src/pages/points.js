import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import PointsCard from 'components/PointsCard';
import firebaseWrapper from '../firebaseWrapper';

ReactDOM.render(<Menu />, document.getElementById('menu'));
firebaseWrapper.getUser(localStorage.getItem("userid")).then((userid) => {
    ReactDOM.render(<PointsCard pnts={userid ? userid.points : 0} />, document.getElementById('card'));
})