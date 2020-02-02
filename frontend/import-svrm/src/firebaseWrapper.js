import * as firebase from 'firebase';
import "firebase/database";
import config from "./config"

firebase.initializeApp(config.firebaseConfig);

const database = firebase.database();
const auth = firebase.auth();
var signedIn = false;
var uid = null

const createVideo = function(videoAssetId,videoPlaybackId,captions,location) {
    database.ref('videos/' + videoAssetId).set({
        videoAssetId: videoAssetId,
        videoPlaybackId: videoPlaybackId,
        captions : captions,
        location: location,
        reviewers: [],
        upvotes: 0,
        downvotes: 0,
        display: true
      });
}

const updateVideo = function (videoAssetId, newData) {
    database.ref('videos/'+videoAssetId).set(newData);
}

const createUser = function(uid, email){
    database.ref("users/" + uid).set({
        userid: uid,
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

const addReviewer = function (videoAssetId, userId) {
     return getVideo(videoAssetId).then((data) => { 
         data[videoAssetId]['reviewers'].push(userId)
         return data
        }).then((data) => { 
            return updateVideo(videoAssetId, data) 
        })
}

const upvote = function (videoAssetId, userId) {
    return getVideo(videoAssetId).then(data => {
        console.log(videoAssetId, data)
        if (!data.hasOwnProperty('reviewers')){
            data['reviewers'] = [userId]
            data['upvotes'] = data['upvotes'] + 1
        } else {
            var alreadyVoted = data['reviewers'].find((e) => { 
                console.log(e, userId, e == userId, e === userId)
                return e === userId 
            })
            if (!alreadyVoted) {
                data['reviewers'].push(userId)
                data['upvotes'] = data['upvotes'] + 1
            } else {
                console.warn("You can vote once")
            }
        }
        return data
    }).then(data => {
        return updateVideo(videoAssetId, data)
    })
}

const downvote = function (videoAssetId, userId) {
    return getVideo(videoAssetId).then(data => {
        console.log(videoAssetId, data)
        if (!data.hasOwnProperty('reviewers')){
            data['reviewers'] = [userId]
            data['downvotes'] = data['downvotes'] + 1
        } else {
            var alreadyVoted = data['reviewers'].find((e) => { 
                console.log(e, userId, e == userId, e === userId)
                return e === userId 
            })
            if (!alreadyVoted) {
                data['reviewers'].push(userId)
                data['downvotes'] = data['downvotes'] + 1
            } else {
                console.warn("You can vote once")
            }
        }
        return data
    }).then(data => {
        return updateVideo(videoAssetId, data)
    })
}

// const uiConfig = {
//     // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//     // We will display Google and Facebook as auth providers.
//     signInOptions: [
//       firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ]
//   };

export default { createVideo, createUser, auth, login, getUser, getVideo, getVideos, createMapping, addReviewer, upvote, downvote }
