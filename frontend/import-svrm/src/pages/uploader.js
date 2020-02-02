import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import muxWrapper from '../muxWrapper'
import firebaseWrapper from '../firebaseWrapper'

ReactDOM.render(<Menu />, document.getElementById('menu'));

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  var location;
  function success(pos) {
    var crd = pos.coords;
    // console.log('Your current position is:');
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
    location=crd.latitude+','+crd.longitude;
  }
  function error(err) {
    console.warn(err);
  }  
navigator.geolocation.getCurrentPosition(success, error, {maximumAge:60000, timeout:5000, enableHighAccuracy:true});

const UpChunk = require('@mux/upchunk');
const filePicker = document.getElementById('file-picker');
var uid = localStorage.getItem("userid")
var caption = document.getElementById("caption").value;
function myFunc() {
    const file = filePicker.files[0];
    console.log('I am here');
    muxWrapper.getUploadLink().then(data => {
        const url = data['data']['url'];
        var upload_id = data['data']['id'];
        const upload = UpChunk.createUpload({
            file,
            // Normally this would be retrieved via an API request to an endpoint
            // you control that would return an authenticated URL.
            endpoint: url
        });
        upload.on('success', () => {
            console.log('We did it, everyone!');
            setTimeout(() => {
            muxWrapper.getAccessfromUpload(upload_id).then(uploaddata => {
                // console.log(uploaddata);
                var asset_id=uploaddata['data']['asset_id'];
                muxWrapper.getAccessInfo(asset_id).then(assetdata => {
                    console.log(assetdata);
                    var playback_id = assetdata['data']['playback_ids'][0]['id'];
                    firebaseWrapper.createVideo(asset_id,playback_id,caption,location, uid);
                    firebaseWrapper.createMapping(uid, asset_id);
                })
            })
        }, 2000);
            // firebaseWrapper.createVideo()
        });
        upload.on('error', console.error)
        upload.on('progress', console.info)
    })
};

document.getElementById('upload').addEventListener('click',myFunc);
