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
        firebaseWrapper.getUsers().then(v => {
        //     console.log("hello")
        //     console.log(v)
            this.setState({items: v})
        })
        // this.setState({items: getVideos()})
    }

    render() {
        console.log(this.state.items)
        str = ''
        for (const key in this.state.items) {
            if (this.state.items.hasOwnProperty(key)) {
                const element = this.state.items[key];
                str = str + '<p>'+ element.uid+ '</p>' 
                
            }
        }
        return (
            <div>
                <p>There are {Object.keys(this.state.items)} videos</p>
            </div>
        )
    }
}
