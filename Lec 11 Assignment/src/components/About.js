import React from "react";
import ProfileClass from "./ProfileClass"
class About extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>
        <h1>About Us Page</h1>
        <p>This is a Namaste React Live Course Chapter 07 - Finding the Path</p>
        <ProfileClass name="Anupam class component"></ProfileClass>
    </div>
        )
    }
}
export default About;
