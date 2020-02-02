import React, { Component } from 'react';
import style from './VidUploader.css';
import UploadToCloud from '../assets/images/upload-icon-2.png'

// const LoginContext = React.createContext(false)

export default class VidUploader extends Component {
  render() {
    return (
        <div className={style.parentDiv}>        
            <div>
                <img src={UploadToCloud} id="cloudicon"/>
            </div>
            <div className={style.fieldsDiv}>
                <input id="file-picker" type="file"/>
                <input id="caption" type="text" placeholder="Enter caption" required/>
                <button type="button" id='upload'>Upload</button>
            </div>
        </div>
    );
  }
}
