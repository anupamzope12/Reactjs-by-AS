import { useEffect, useState } from "react";

const Profile=(props)=>{
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(0);
    console.log("render function")

    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("NAMASTE REACT OP")
        },1000)
        console.log("useEffect")
        return ()=>{
            clearInterval(timer);
            console.log("useEffect Return");
        }
    },[])

    console.log("render");

     return(
        <div>
            <h1>In profile component</h1>
            <h2 > name = {props.name}</h2>
            <h2 > count = {count}</h2>
            <button onClick={()=> {setCount(1);setCount2(2)}}>Count</button>
        </div>
    )
}

export default Profile;