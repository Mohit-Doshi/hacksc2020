import React, { Component } from 'react'
import getVideos from '../../firebaseWrapper'
import firebaseWrapper from '../../firebaseWrapper'

export default class ListItems extends Component {
    constructor(props){
        super(props)
        this.state = { items: {} }
    }

    componentDidMount(){
        // console.log(firebaseWrapper.getVideos())
        firebaseWrapper.getVideos().then(console.log)
        firebaseWrapper.getVideos().then(v => {
        //     console.log("hello")
        //     console.log(v)
        // v.forEach(element => {
            
        // });
            this.setState({items: v})
        })
        // this.setState({items: getVideos()})
    }

    render() {
        return (
            <div>
                <p>There are {Object.keys(this.state.items)} videos</p>
            </div>
        )
    }
}
