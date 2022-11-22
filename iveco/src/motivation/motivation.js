import "./Motivation.scss"
import React from 'react'

function Motivation() {
  return (
    <section className="background-wrapper">
        <div className="title-wrapper">
            <h1 className='header-size'>Let's drive the road of change</h1>
            <h4>
                We want change ourself because we belive in future.
                We're the pioneer and leaders of natural gas commercial vehicles.
            </h4>
            <button  className="buttons">Read the manifesto
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12.5H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 7.5L21 12.5L16 17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
        </div>
    </section>
  )
}

export default Motivation