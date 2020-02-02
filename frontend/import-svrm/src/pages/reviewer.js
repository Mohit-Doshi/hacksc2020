import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import firebaseWrapper from '../firebaseWrapper'
import ListItems from '../components/ListItems';

ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<ListItems/>, document.getElementById('map-canvas'))

// var videos = []


// firebaseWrapper.getVideos().then((v) => {
//     videos = v
//     console.log("starting", videos)

// })


// function addUpvote() {
//     var videoAssetId = "nA3Rgdf3VHqurwwl01AYRn21SmJZADHPa"
//     firebaseWrapper.upvote(videoAssetId, localStorage.getItem("userid"))
// }

// document.getElementById("upvote").addEventListener('click', addUpvote);


// function addDownvote() {
//     var videoAssetId = "nA3Rgdf3VHqurwwl01AYRn21SmJZADHPa"
//     firebaseWrapper.downvote(videoAssetId, localStorage.getItem("userid"))
// }

// document.getElementById("downvote").addEventListener('click', addDownvote);