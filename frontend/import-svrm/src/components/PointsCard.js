import React, { Component } from 'react';
import style from './PointsCard.css';
import instame from '../assets/images/instame.png';
import larry from '../assets/images/larry.png';
import snap from '../assets/images/snap.png';
import whatsapp from '../assets/images/whatsapp.png';
import zuck from '../assets/images/zuck.png';
// import UploadJSON from '../assets/images/upload-json.png'

export default class PointsCard extends Component {
  render() {
    return (
        <div className={style.pCard}>
            <h1 className={style.currentUser}>{localStorage.getItem("uname")}</h1>
            <svg width="960" height="500">
                <g transform="translate(200,180)">
                    <circle r="100" stroke="none" fill="orange"></circle>
                    <text dx="-50" dy="+10" fontSize="3em">{this.props.pnts} pts</text>
                </g>
            </svg>
            <div className={style.socialIcons}>
                <a href="#" className={style.iconbutton, style.twitter}><img src={larry}/><i className={style.icontwitter}></i><span></span></a>
                <a href="#" className={style.iconbutton, style.facebook}><img src={zuck}/><i className={style.iconfacebook}></i><span></span></a>
                <a href="#" className={style.iconbutton, style.googleplus}><img src={whatsapp}/><i className={style.icongoogleplus}></i><span></span></a>
                <a href="#" className={style.iconbutton, style.youtube}><img src={instame}/><i className={style.iconyoutube}></i><span></span></a>
                <a href="#" className={style.iconbutton, style.pinterest}><img src={snap}/><i className={style.iconpinterest}></i><span></span></a>
            </div>
        </div>
    );
  }
}