import "./Header.scss";
import React from "react";
import { useState } from 'react'
import logo from "../../Images/Iveco-logo.png"
const headerTexts = ["Daily", "eDaily", "Eurocargo", "S-Way", "S-Way Natural Gas", "X-Way", "T-Way", "Bus", "Camper"]

function Header() {
  const [fix, setFix] = useState(false)
  const setFixed = () =>{
    if(window.scrollY >= 500) {
      setFix(true)
    } else {
      setFix(false)
    }
  }
  window.addEventListener('scroll', setFixed)
  return (
    <>
      <section className="header">   
      <div className={fix ? 'nav-bar fixed' : 'nav-bar'}>
        {headerTexts.map((text) => {
              return <a href="/" key="{item}">{text}</a>
             })}
        <img src={logo} alt="" srcset="" />
        
      </div>
      </section>
    </>
  );
}

export default Header;
