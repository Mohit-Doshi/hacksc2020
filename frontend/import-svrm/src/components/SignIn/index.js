import React, { Component } from 'react'
import loginContext from '../Menu';
import firebaseWrapper from '../../firebaseWrapper';
import './index.css'

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {signedIn: localStorage.getItem("signedIn") == "true", userid: localStorage.getItem("userid"), uNaMe: localStorage.getItem("uname")}
        this.signIn = this.signIn.bind(this)
        this.signOut = this.signOut.bind(this)
        
        // console.log(firebaseWrapper.signedIn)
    }
    signIn(){
        firebaseWrapper.auth.signInAnonymously().then(user => {
            console.log(user);
            if(document.getElementById("usersname").value === localStorage.getItem(document.getElementById("usersname").value)) {
                if(document.getElementById("userspword") != localStorage.getItem(document.getElementById("userspword").value)) {
                    throw error
                }
            }
            firebaseWrapper.createUser(user.user.uid,user.user.email)
            localStorage.setItem("signedIn", "true")
            localStorage.setItem("userid", user.user.uid)
            localStorage.setItem("uname", document.getElementById("usersname").value);
            localStorage.setItem("pword", document.getElementById("userspword").value);
            this.setState({signedIn: true, uid: user.user.uid})
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            window.alert("Incorrect Credentials!");
            console.log(errorCode, errorMessage)
        });
    }

    signOut(){
        firebaseWrapper.auth.signOut().then(() => {
            this.setState({signedIn: false, userid: null})
            localStorage.setItem("signedIn", "false")
            localStorage.removeItem("userid")
            window.signedIn = false
            console.log("The username and password: ", localStorage.getItem("uname"), " ", localStorage.getItem("pword"))
        })
    }
    componentWillMount(){
        firebaseWrapper.login()
        // firebaseWrapper.signedIn.then((x) => this.setState({signedIn: x}))
    }
    render() {
        
        if(this.state.signedIn){
            return(<div>
                <h3 style={{fontFamily: "Tahoma, Geneva, sans-serif", color: "white"}}>Hello, {localStorage.getItem("uname")}</h3>
                <div style={{float: "right"}}>
                    <button onClick={this.signOut}>Sign out</button>
                </div>
            </div>)
        } else {
            return (
            <div>
                 <form onSubmit={this.signIn}>
                     <input type="name" id="usersname" placeholder="Enter your Name" required /><br />
                     <input type="password" id="userspword" placeholder="Enter your Password" required /><br />
                     <input type="submit" />
                 </form>
                 {/* <button onClick={this.signIn}>Sign in!</button> */}
             </div>)
        }
    }
}
