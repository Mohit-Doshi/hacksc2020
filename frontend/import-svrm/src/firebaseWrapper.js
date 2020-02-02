import * as firebase from 'firebase';
import "firebase/database";
import config from "./config"

firebase.initializeApp(config.firebaseConfig);

const database = firebase.database();
const auth = firebase.auth();
var signedIn = false;
var uid = null

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

const createUser = function(uid, email){
    database.ref("users/" + uid).set({
        uid: uid,
        name: '',
        email: email,
        points: 0,
        password: ''
    })
}

const createMapping = function(uid, videoAssetId) {
    database.ref('mapping/' + uid + videoAssetId).set({
        videoAssetId: videoAssetId,
        userid: uid
      });
}

const getUser = function(uid){
    return database.ref("users/"+uid).once('value').then((snapshot)=>{ return snapshot.val() })
}

const getVideo = function(videoAssetId){
    return database.ref("videos/"+videoAssetId).once('value').then((snapshot) => { return snapshot.val() })
}

const getVideos = function(){
    return database.ref("videos").once('value').then((snapshot) => { return snapshot.val() })
}

const getUsers = function(){
    return database.ref("users").once('value').then((snapshot) => { return snapshot.val() })
}


const login = function(){
    auth.signInAnonymously().then(user => { createUser(user) })
}

// const uiConfig = {
//     // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//     // We will display Google and Facebook as auth providers.
//     signInOptions: [
//       firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ]
//   };

export default { createVideo, createUser, auth, login, getUser, getVideo, getVideos, createMapping}
