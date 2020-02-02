import React, { Component } from 'react';
import style from './PointsCard.css';
// import UploadJSON from '../assets/images/upload-json.png'

export default class PointsCard extends Component {
  render() {
    return (
        <div className={style.pCard}>
            <h1 className={style.currentUser}>{localStorage.getItem("uname")}</h1>
            <svg width="960" height="500">
                <g transform="translate(200,200)">
                    <circle r="100" stroke="none" fill="orange"></circle>
                    <text dx="-50" dy="+10" fontSize="3em">{this.props.pnts} pts</text>
                </g>
                {/* <script>
                    document.getElementsByTagName('g')[0].setAttribute("transform","translate(" + window.innerWidth/2 + "," + window.innerHeight/2 + ")");
                </script> */}
            </svg>
        </div>
    );
  }
}