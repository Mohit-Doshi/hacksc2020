import * as firebase from 'firebase';
import "firebase/database";
import config from "./config"

firebase.initializeApp(config.firebaseConfig);

var database = firebase.database();

var createVideo = function(videoAssetId,videoPlaybackId,captions,location) {
    database.ref('videos/' + videoAssetId).set({
        videoAssetId: videoAssetId,
        videoPlaybackId: videoPlaybackId,
        captions : captions,
        location: location,
        reviewers: {},
        upvotes: 0,
        downvotes: 0,
        display: true
      });
}

var createUser = function(){

}

export default {
    'createVideo': createVideo
}