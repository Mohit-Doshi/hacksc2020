import React, { Component } from 'react';
import './VidUploader.css';
import UploadToCloud from '../assets/images/upload-icon-2.png'

// const LoginContext = React.createContext(false)

export default class VidUploader extends Component {
  render() {
    return (
        <div>        
            <input id="file-picker" type="file" />
            <input id="caption" type="text" placeholder="Enter caption"/>
            <button type="button" id='upload'>Upload</button>
        </div>
    );
  }
}
