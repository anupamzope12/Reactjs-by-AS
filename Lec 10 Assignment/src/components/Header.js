import React, { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://lh5.googleusercontent.com/p/AF1QipMelStMy6IBhAS3YDMNPCL1x4uO2E0iCpe-aG4t"
      ></img>
    </a>
  );
}

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title/>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            Cart
          </li>
        </ul>
      </div>
      { isLoggedIn ? (
        <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={()=>setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
}

export default Header;
