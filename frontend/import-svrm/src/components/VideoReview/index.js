import React, { Component } from 'react'
import firebaseWrapper from '../../firebaseWrapper';


export default class VideoReview extends Component {
    constructor(props){
        super(props)
        this.upvote = this.upvote.bind(this)
        this.downvote = this.downvote.bind(this)
    }

    componentDidMount(){
        var url = "https://stream.mux.com/"+this.props.playbackId+".m3u8";

    // HLS.js-specific setup code
        if (Hls.isSupported()) {
            var video = document.getElementById(this.props.id);
            var hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(video);
        }
    }

    upvote(){
        firebaseWrapper.upvote(this.props.id, localStorage.getItem("userid"))
    }

    downvote(){
        firebaseWrapper.downvote(this.props.id, localStorage.getItem("userid"))
    }

    render() {
        return (
            <div>
                <video id={this.props.id} controls></video>
                <button id="upvote" onClick={this.upvote}>Upvote</button>
                <button id="downvote" onClick={this.downvote}>Downvote</button>
            </div>
        )
    }
}
