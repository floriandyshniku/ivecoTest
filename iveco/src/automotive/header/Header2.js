//rfce
import "./HeaderTwo.scss"
import React from 'react'



function Header2() {
    const buttonLabel = [
     "Tutti i veicoli", "Lunghe distanze", "Consegne regionali", "Consegne urbane",
     "Municipalita", "Costruzioni", "Off Road"]
    

  return (
    <section className="header-pg2">
        <div className="title-elm">
            <div className="title">
                <h1 className='header-size'>Veicoli e missioni</h1>
            </div>
            <div className="usage-elm">
                    {
                    buttonLabel.map((label) => {
                        return <button >{label}</button>
                    })
                    }
            </div>
        </div>
    </section>
  )
}

export default Header2