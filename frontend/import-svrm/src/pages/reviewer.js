import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import firebaseWrapper from '../firebaseWrapper'
import muxWrapper from '../muxWrapper';

ReactDOM.render(<Menu />, document.getElementById('menu'));

function updateVotes(e){
    clicked_asset_id = e.target.getAttribute("assetId");
    clicked_class = e.target.className;
    if(clicked_class == 'upvote_button'){
        console.log("You clicked upvote!");
        console.log(clicked_class);
        console.log(clicked_asset_id);
        firebaseWrapper.upvote(clicked_asset_id, localStorage.getItem("userid"))
    }
    else{
        console.log("You clicked downvote!");
        console.log(clicked_class);
        console.log(clicked_asset_id);
        firebaseWrapper.downvote(clicked_asset_id, localStorage.getItem("userid"))
    }
}

var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(0, 0)
};

var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

firebaseWrapper.getVideos().then(videos => {
    for (const key in videos) {
        if (videos.hasOwnProperty(key)) {
            const video = videos[key];
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(parseFloat(video.location.split(",")[0]), parseFloat(video.location.split(",")[1])),
                map: map,
                title: video['captions']
            });

            var videoURL = "https://stream.mux.com/"+video['videoPlaybackId']+'.m3u8';
            var hls = new Hls();
            hls.loadSource(videoURL);
            // hls.attachmedia()

            

                    // (function(){
                    //     // Replace with your asset's playback ID
                    //     var playbackId = "YOUR_PLAYBACK_ID";
                    //     var url = "https://stream.mux.com/"+playbackId+".m3u8";    // HLS.js-specific setup code
                    //     if (Hls.isSupported()) {
                    //       var video = document.getElementById("myVideo");
                    //       var hls = new Hls();
                    //       hls.loadSource(url);
                    //       hls.attachMedia(video);
                    //     }
                    //   })();
                    google.maps.event.addListener(marker, 'click', (function(marker) {
                    return function() {
                        var markup = document.getElementById("info-popup");
                        var caption = markup.content.getElementById("caption");
                        var upvote = markup.content.getElementById("upvote_button");
                        var downvote = markup.content.getElementById("downvote_button");
                        var upvoteText = markup.content.getElementById("upvote_text");
                        var downvoteText = markup.content.getElementById("downvote_text");
                        var videoPlayer = markup.content.getElementById("videoPlayer");
                        hls.attachMedia(videoPlayer)

                        caption.textContent = video['captions']
                        upvoteText.textContent = video['upvotes']
                        downvoteText.textContent = video['downvotes']

                        upvote.setAttribute("assetId", video['videoAssetId'])
                        downvote.setAttribute("assetId", video['videoAssetId'])

                        upvote.addEventListener("click", updateVotes);
                        downvote.addEventListener("click", updateVotes);

                        // var contentString = '<div class="content">' +
                        //     '<div class="siteNotice">' +
                        //     '</div>' +
                        //     '<h2 class="firstHeading">' + video['captions'] + '</h2>' +
                        //     '<div class="bodyContent">' +
                        //     '<video id="'+video['videoAssetId']+'" src="https://stream.mux.com/' + video['videoPlaybackId']  + '.m3u8"><source src="https://stream.mux.com/' + video['videoPlaybackId']  + '.m3u8" type="application/x-mpegURL"></video><br/><br/>' +
                        //     '<button class="upvote_button" id="' + video['videoAssetId'] + '">Upvotes ' + video['upvotes'] + ' <i class="fa fa-thumbs-up upvote"></i></button>' +
                        //     '<button class="downvote_button" id="' + video['videoAssetId'] + '">Downvotes ' + video['downvotes'] + ' <i class="fa fa-thumbs-down downvote"></i></button>' +
                        //     '</div>' + '</div>';
                        var infowindow = new google.maps.InfoWindow({
                            content: document.importNode(markup.content,true)
                        });
                        infowindow.open(map, marker);
                    }
                })(marker));

            
        }
    };
})



// function initialize() {
//     var mapOptions = {
//         zoom: 4,
//         center: new google.maps.LatLng(0, 0)
//     };
//     var video_urls = ['https://www.youtube.com/embed/7RP3g9avaHc', 'https://www.youtube.com/embed/fewGmJd0q94', 'https://www.youtube.com/embed/Uai1tsLSNxc'];
//     var video_asset_ids = firebaseWrapper.getVideos();
//     var video_captions = ['Wow', 'Good', 'Bad'];
//     var lats = [34.064008, 34.063724, 34.052034];
//     var lngs = [-118.219106, -118.243681, -118.285459];
//     var upvotes = [100, 200, 300];
//     var downvotes = [50, 150, 20];
//     var marker_hash = [];
//     var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//     var infowindow;
//     var marker, i, contentString;
//     for (i = 0; i < video_urls.length; i++) {
//         marker = new google.maps.Marker({
//             position: new google.maps.LatLng(lats[i], lngs[i]),
//             map: map,
//             title: 'Click Me!'
//         });
//         marker_hash[video_asset_ids[i]] = marker;
//         google.maps.event.addListener(marker, 'click', (function(marker, i) {
//             return function() {
//                 contentString = '<div class="content">' +
//                     '<div class="siteNotice">' +
//                     '</div>' +
//                     '<h2 class="firstHeading">' + video_captions[i] + '</h2>' +
//                     '<div class="bodyContent">' +
//                     '<iframe class="video_iframe" src="' + video_urls[i] + '" frameborder="0"></iframe><br><br>' +
//                     '<button class="upvote_button" id="' + video_asset_ids[i] + '">Upvotes ' + upvotes[i] + ' <i class="fa fa-thumbs-up upvote"></i></button>' +
//                     '<button class="downvote_button" onclick="updateVotes('+ video_asset_ids[i] + ', \'downvote_button\')">Downvotes ' + downvotes[i] + ' <i class="fa fa-thumbs-up downvote"></i></button>' +
//                     '</div>' +
//                     '</div>';
//                 infowindow = new google.maps.InfoWindow({
//                     content: contentString
//                 });
//                 infowindow.open(map, marker);
//             }
//         })(marker, i));
//     }
// }


// document.addEventListener('click', function (e) {
//     console.log(e)
//     if (e.target && ((e.target.className == "upvote_button") || (e.target.className == "downvote_button"))) {
//         updateVotes(e.target.id, e.target.className)
//     }
    
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