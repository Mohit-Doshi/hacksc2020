import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import muxWrapper from '../muxWrapper'

ReactDOM.render(<Menu />, document.getElementById('menu'));

// muxWrapper.getAccessInfo("00401k8pUJIopNaUyT5024tPhw8mEstyv5A")
muxWrapper.getAccessInfo("00401k8pUJIopNaUyT5024tPhw8mEstyv5A").then(data => {
    console.log(data);
})

const UpChunk = require('@mux/upchunk');

// // This assumes there's an <input id="file-picker" type="file" /> on the page.
// const filePicker = document.getElementById('file-picker');

// const url = /* the URL from step 1. */

// filePicker.onchange = function () {
//   const file = filePicker.files[0];

//   const upload = UpChunk.createUpload({
//     file,
//     // Normally this would be retrieved via an API request to an endpoint
//     // you control that would return an authenticated URL.
//     endpoint: url
//   });
  
//   upload.on('success', () => console.log('We did it, everyone!'));
// }

const filePicker = document.getElementById('file-picker');
// filePicker.onchange = function () {
//     const file = filePicker.files[0];
//     console.log('I am here');
//     muxWrapper.getUploadLink().then(data => {
//         console.log(data['data']['url']);
//         const url = data['data']['url'];
//         const upload = UpChunk.createUpload({
//             file,
//             // Normally this would be retrieved via an API request to an endpoint
//             // you control that would return an authenticated URL.
//             endpoint: url
//         });
//         upload.on('success', () => console.log('We did it, everyone!'));
//     })
// }

function myFunc() {
    const file = filePicker.files[0];
    console.log('I am here');
    muxWrapper.getUploadLink().then(data => {
        console.log(data['data']['url']);
        const url = data['data']['url'];
        console.log('debug url', url);
        const upload = UpChunk.createUpload({
            file,
            // Normally this would be retrieved via an API request to an endpoint
            // you control that would return an authenticated URL.
            endpoint: url
        });
        upload.on('success', () => console.log('We did it, everyone!'));
        upload.on('error', console.error)
        upload.on('progress', console.info)
    })
};

document.getElementById('upload').addEventListener('click',myFunc);

