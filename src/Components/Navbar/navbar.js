import React from "react";

export default function Navbar(){
  return(
    <nav className="nav"> 
      <a className="home-link" href="https://www.google.com/" target= "_blank">
        <img className="nav-logo" src="./img/icons/nav-logo.svg"/>
        <h1 className="nav-text">my travel journal</h1>
      </a>
    </nav>
  )
}