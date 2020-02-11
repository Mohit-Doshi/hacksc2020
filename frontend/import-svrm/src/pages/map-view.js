import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import MapComponent from 'components/MapComponent'
import firebaseWrapper from '../firebaseWrapper.js'

ReactDOM.render( < Menu / > , document.getElementById('menu'));
// ReactDOM.render(<MapComponent />, document.getElementById('map-canvas'));

let videos



        function trial(clicked_asset_id, clicked_class){
            if(clicked_class == 'upvote_button'){
                console.log("You clicked upvote!");
                console.log(clicked_class);
                console.log(clicked_asset_id);
            }
            else{
                console.log("You clicked downvote!");
                console.log(clicked_class);
                console.log(clicked_asset_id);
            }
        }

function initialize() {
    firebaseWrapper.getVideos().then((e) => {

        console.log("e = ", e);
        videos = e;



        console.log('Here')
        var mapOptions = {
            zoom: 4,
            center: new google.maps.LatLng(0, 0)
        };
        var video_urls = ['https://www.youtube.com/embed/7RP3g9avaHc', 'https://www.youtube.com/embed/fewGmJd0q94', 'https://www.youtube.com/embed/Uai1tsLSNxc'];
        var video_asset_ids = [1232, 3727, 4738];
        var video_captions = ['Wow', 'Good', 'Bad'];
        var lats = [34.064008, 34.063724, 34.052034];
        var lngs = [-118.219106, -118.243681, -118.285459];
        var upvotes = [100, 200, 300];
        var downvotes = [50, 150, 20];
        var marker_hash = [];
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var infowindow;
        var marker, i, contentString;
        //    for (i = 0; i < video_urls.length; i++) {
        //        marker = new google.maps.Marker({
        //            position: new google.maps.LatLng(lats[i], lngs[i]),
        //            map: map,
        //            title: 'Click Me!'
        //        });
        //        marker_hash[video_asset_ids[i]] = marker;
        //        google.maps.event.addListener(marker, 'click', (function (marker, i) {
        //            return function () {
        //                contentString = '<div class="content">' +
        //                    '<div class="siteNotice">' +
        //                    '</div>' +
        //                    '<h2 class="firstHeading">' + video_captions[i] + '</h2>' +
        //                    '<div class="bodyContent">' +
        //                    '<iframe class="video_iframe" src="' + video_urls[i] + '" frameborder="0"></iframe><br><br>' +
        //                    '<button class="upvote_button" onclick="updateVotes(' + video_asset_ids[i] + ', \'upvote_button\')">Upvotes ' + upvotes[i] + ' <i class="fa fa-thumbs-up upvote"></i></button>' +
        //                    '<button class="downvote_button" onclick="updateVotes(' + video_asset_ids[i] + ', \'downvote_button\')">Downvotes ' + downvotes[i] + ' <i class="fa fa-thumbs-up downvote"></i></button>' +
        //                    '</div>' +
        //                    '</div>';
        //
        //                infowindow = new google.maps.InfoWindow({
        //                    content: contentString
        //                });
        //
        //                infowindow.open(map, marker);
        //            }
        //        })(marker, i));
        //
        //    }


        for (var vid in videos) {
            console.log(vid)
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(videos[vid].location.split(',')[0], videos[vid].location.split(',')[1]),
                map: map,
                title: videos[vid].captions,
                id: videos[vid].videoAssetId,
                class: videos[vid].videoPlaybackId,
                upvotes: videos[vid].upvotes,
                downvotes: videos[vid].downvotes
            });



            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    contentString = '<div class="content">' +
                        '<div class="siteNotice">' +
                        '</div>' +
                        '<h2 class="firstHeading">' + videos[vid].captions + '</h2>' +
                        '<div class="bodyContent">' +
                        '<iframe class="video_iframe" src="https://stream.mux.com/' + marker.get('class') + '.m3u8 " frameborder="0"></iframe><br><br>' +
                        '<button class="upvote_button" onclick="updateVotes(\'' + marker.get('id') + '\', \'upvote_button\')">Upvotes ' + marker.get('upvotes') + ' <i class="fa fa-thumbs-up upvote"></i></button>' +
                        '<button class="downvote_button" onclick="updateVotes(\'' + marker.get('id') + '\', \'downvote_button\')">Downvotes ' + marker.get('downvotes') + ' <i class="fa fa-thumbs-down downvote"></i></button>' +
                        '</div>' +
                        '</div>';
                    
                    infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });
                    infowindow.open(map, marker);
                }
            })(marker, i));

        }
    });
}



google.maps.event.addDomListener(window, 'load', initialize);

// }