import React from "react";
import { NavLink } from "react-router-dom";

//Basic styling for NavLinks
const linkStyles = {
  display: "inline-block", 
  width: "50px", 
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

//define NavBar component
function NavBar(){
  return (
    <div>
      <NavLink
        to="/" 
        exact //set exact so it knows to only set
              // activeStyle when route is equal to link
        style={linkStyles} //add styling to NavLink
        activeStyle={{ //add prop for activeStyle
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
      <NavLink
        to="/message"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Message
      </NavLink>
      <NavLink
        to="/signup"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Sign up
      </NavLink>
    </div>
  );
}

export default NavBar;

