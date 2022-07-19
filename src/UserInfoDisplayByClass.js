import React, { Component } from "react";

export default class UserInfoDisplayByClass extends React.Component{
    constructor() {
        super();
        this.state = {
            username: 'Anas Momin',
            email: 'anasmomin064@gmail.com',
            phone: '7276026626'
        }
    }
    componentDidMount(){
        
        setTimeout(()=>{
            this.setState({isLoadingData:false})
            console.log("loadind user data is completed")
        },4000)
    }
    
    
    shouldComponentUpdate(nextprops,nextstate){
       if(nextstate.username==='anas'){
        return true;
       }
    }
    componentDidUpdate(prevProps,prevState){
            if(prevState.username!==this.state.username){
                return true;
            }
    }
    
 
    render() {
        return (
            <>
                <p>Data loading:{`${this.state.isLoadingData}`}</p>
                <p>This is class Component</p>
                <p> Username {this.state.username}</p>
                <input id='username' onChange={(event) => {
                    let changeUserName = event.target.value;
                    this.setState({ username: changeUserName })
                }}></input>

                <p> User email {this.state.email}</p>
                <input id='email' onChange={(event) => {
                    let changeUseremail = event.target.value;
                    this.setState({ email: changeUseremail })

                }}></input>

                <p> User Phone {this.state.phone}</p>
                <input id='phone' onChange={(event) => {
                    let changeUserphone = event.target.value;
                    this.setState({ phone: changeUserphone })
                }}></input>
                <input type='Submit' onClick={(event) => {
                    alert(`${this.state.username} ${this.state.email} ${this.state.phone}`)
                }}></input>
            </>
        )
    }
}