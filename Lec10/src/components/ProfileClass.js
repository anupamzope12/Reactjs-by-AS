import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
           userInfo :{
            name:"Dumy Name",
            location:"Dumy Location",
           }
        };
        console.log("child-constructor" + this.props.name)
    }

    async componentDidMount() {   
        //called after rendering
        //API Calls
        // const data=await fetch("https://api.github.com/users/akshaymarch7");
        // const json=await data.json();
        // console.log(json)
        // this.setState({
        //     userInfo:json
        // })
        this.timer=setInterval(()=>{
            console.log("NAMASTE REACT OP")
        },1000)
        console.log("child-component did mount")
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.count !== prevState.count) {
            //
          }
          if (this.state.count2 !== prevState.count2) {
            // code
          }
        console.log("Component Did Update"); 
    }
    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("componentWillUnmount")
    }
    render(){
        const {count}=this.state;
        console.log("child-render" + this.props.name);
        return (
        <div>
            <h1>Profile Class Component</h1>
            <img src={this.state.userInfo.avatar_url}/>           
            <h2>Name:{this.state.userInfo.name}</h2>
            <h2>location:{this.state.userInfo.location}</h2>
         </div>
        )
    }
}

export default Profile;

/*
 * 
 * Parent Constructor
 * parent render
 * child constructor
 * child render
 * 
 * DOM is update
 * json is logged in console
 * 
 * Parent component did mount
 * 
 */
