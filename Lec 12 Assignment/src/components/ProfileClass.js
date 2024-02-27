import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        console.log("Child-constructor"+this.props.name)
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/akshaymarch7") 
        const json=await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
    }
    componentDidUpdate(){
        console.log("Component Did Update"); 
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    render(){
        console.log("child-render" + this.props.name);
        return(
            <div>
                <h1>Profile Class Component</h1>
                <img src={this.state?.userInfo?.avatar_url}/>           
                <h2>Name :{this.state?.userInfo?.name}</h2>
                <h2>Location :{this.state?.userInfo?.location}</h2>
                <h2>Company :{this.state?.userInfo?.company}</h2>
                <h2>Bio :{this.state?.userInfo?.bio}</h2>

            </div>
          
        )
    }
}
export default Profile;