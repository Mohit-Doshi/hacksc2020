import React, { Component } from 'react'
import loginContext from '../Menu';
import firebaseWrapper from '../../firebaseWrapper';

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {signedIn: localStorage.getItem("signedIn") == "true", uid: localStorage.getItem("uid")}
        this.signIn = this.signIn.bind(this)
        this.signOut = this.signOut.bind(this)
        
        // console.log(firebaseWrapper.signedIn)
    }
    signIn(){
        firebaseWrapper.auth.signInAnonymously().then(user => {
            console.log(user);
            firebaseWrapper.createUser(user.user.uid,user.user.email)
            localStorage.setItem("signedIn", "true")
            localStorage.setItem("uid", user.user.uid)
            this.setState({signedIn: true, uid: user.user.uid})
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorCode, errorMessage)
        });
    }

    signOut(){
        firebaseWrapper.auth.signOut().then(() => {
            this.setState({signedIn: false, uid: null})
            localStorage.setItem("signedIn", "false")
            localStorage.removeItem("uid")
            window.signedIn = false
        })
    }
    componentWillMount(){
        firebaseWrapper.login()
        // firebaseWrapper.signedIn.then((x) => this.setState({signedIn: x}))
    }
    render() {
        
        if(this.state.signedIn){
            return(<div>
                <p>Hello, {this.state.uid}</p>
                <button onClick={this.signOut}>Sign out</button>
            </div>)
        } else {
        return (
            <div>
                 <button onClick={this.signIn}>Sign in!</button>
             </div>)
        }
    }
}
