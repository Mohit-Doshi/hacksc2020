import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import firebaseWrapper from '../firebaseWrapper';

ReactDOM.render(<Menu />, document.getElementById('menu'));

function addUpvote() {
    var videoAssetId = "kXwOuP4ZuCtQNxNdDqXHITalNl3v3mFa"
    firebaseWrapper.upvote(videoAssetId, localStorage.getItem("userid"))
}

document.getElementById("upvote").addEventListener('click', addUpvote);


function addDownvote() {
    var videoAssetId = "kXwOuP4ZuCtQNxNdDqXHITalNl3v3mFa"
    firebaseWrapper.downvote(videoAssetId, localStorage.getItem("userid"))
}

document.getElementById("downvote").addEventListener('click', addDownvote);