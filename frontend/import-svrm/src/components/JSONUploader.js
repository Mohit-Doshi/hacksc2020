import React, { Component } from 'react';
import style from './JSONUploader.css';
import UploadJSON from '../assets/images/upload-json.png'

export default class JSONUploader extends Component {
  render() {

    function handleClick(e) {
        e.preventDefault();
        // parse here ?        
      }

    return (
        <div className={style.parentDiv}>  
            <h3><a className={style.fetchlink} href="https://takeout.google.com/settings/takeout/custom/location_history" target="_blank">Download your Google Maps Location History here</a></h3>
            <h2>Upload the JSON file for your month of choice</h2>
            <input className={style.jsonpicker} type="file"/>      
            <div>
                <button className={style.upload} onClick={handleClick} type="button"><img src={UploadJSON} className={style.jsonicon}/></button>
            </div>
        </div>
    );
  }
}
