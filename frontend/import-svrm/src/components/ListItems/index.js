import React, { Component } from 'react'
import getVideos from '../../firebaseWrapper'
import firebaseWrapper from '../../firebaseWrapper'
import VideoReview from '../VideoReview'

export default class ListItems extends Component {
    constructor(props){
        super(props)
        this.state = { videos: {} }
    }

    componentDidMount(){
        // console.log(firebaseWrapper.getVideos())
        firebaseWrapper.getVideos().then(v => {
        //     console.log("hello")
        //     console.log(v)
            this.setState({videos: v})
        })
        // this.setState({videos: getVideos()})
    }

    render() {
        console.log(this.state.videos)
        var elements = []
        for (const key in this.state.videos) {
            if (this.state.videos.hasOwnProperty(key) && this.state.videos[key]['display']) {
                elements.push(<VideoReview key={key} id={key} playbackId={this.state.videos[key]['videoPlaybackId']}></VideoReview>)
                
            }
        }
        return (
            <div>
                {elements}
            </div>
        )
    }
}
