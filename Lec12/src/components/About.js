import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile"
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props)
        // console.log("parent-constructor")
    }

    componentDidMount(){
        // console.log("parent-componentDidMount")
    }

    render(){
        // console.log("parent-Render")
        return(           
            <div>
                <h1>About Us Page</h1>
                <p>This is a Namaste React Live Course Chapter 07 - Finding the Path</p>
                <Profile name={"Anupam from class"}/>
            </div>
        ) 
    }
}

export default About;