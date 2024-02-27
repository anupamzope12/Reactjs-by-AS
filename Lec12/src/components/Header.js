import { useState } from "react";
import { Link } from "react-router-dom";

//SPA =>with SPA application our applicationour page does not load
// two types of routing 1.client side routing  2. server side routing

const Title = ()=>{
    return( 
        <a href="/">
        <img className="h-28" alt="logo" src="https://lh5.googleusercontent.com/p/AF1QipMelStMy6IBhAS3YDMNPCL1x4uO2E0iCpe-aG4t"></img>
        </a>
    )
}

const Header = ()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg sm:blue-50 md:bg-yellow-50" >
            <Title/>
            
            <div className="nav-items">
                <ul className="flex py-10 px ">
                    <li className="px-2">
                        <Link to="/">Home</Link>
                    </li> 
                    <li className="px-2">
                        <Link to="/about">About</Link>
                    </li>      
                    <li className="px-2">
                        <Link to="/contact">Contact</Link>
                    </li>  
                    <li className="px-2">
                        <Link to="/instamart">Instamart</Link>
                    </li>      
                    <li className="px-2">Cart</li>
                </ul>
            </div>
           
            { isLoggedIn ? (
                
            <button onClick={()=>setIsLoggedIn(false)}>Logout</button> )
            : <button onClick={()=>setIsLoggedIn(true)}>Login</button>

            }
            
        </div>
    )
}

export default Header;