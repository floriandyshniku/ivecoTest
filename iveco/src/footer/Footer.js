import React from 'react'
import "./Footer.scss"
import icon from "../Images/Iveco-logo.png"
import fbIcon from "../Images/facebook.png"
const headerTexts = ["Daily", "eDaily", "Eurocargo", "S-Way", "S-Way Natural Gas", "X-Way", "T-Way", "Bus", "Camper", "Misioni"]
function Footer() {
  return (
    <section className='footer-container'>
        <div className="icon-wrapper-footer">
            <img src={icon} alt="" />
            <div className="toolbar-footer">
                
                    {headerTexts.map(items => {
                       return <p>{items}</p> 
                    })}
                
            </div>
        </div>
        <div className="footer-stage">
            <div className="purchase-wrapper footer-stage-el">
                 <h3>Acquista</h3> 
                 <p>Promozioni</p>  
                 <p>Promozioni</p>  
                 <p>Promozioni</p>  
                 <p>Promozioni</p>  
                 <p>Promozioni<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3335 8H12.6668" stroke="#1554FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.6665 4L12.6665 8L8.6665 12" stroke="#1554FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                 </p>  
                 <p>Promozioni<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3335 8H12.6668" stroke="#1554FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.6665 4L12.6665 8L8.6665 12" stroke="#1554FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                 </p>  
                 <p>Promozioni<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3335 8H12.6668" stroke="#1554FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.6665 4L12.6665 8L8.6665 12" stroke="#1554FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                 </p>  
                 <p>Promozioni</p>  
                 <p>Promozioni</p>  
            </div>
            <div className="service-footer-wrapper footer-stage-el">
                    <h3>Servizi</h3>
                    <p>Iveco On- Web a App</p>
                    <p>Iveco On- Web a App</p>
                    <p>Iveco On- Web a App</p>
                    <p>Iveco On- Web a App</p>
                    <p>Iveco On- Web a App</p>
                    <p>Iveco On- Web a App</p>
                    <p>Iveco On- Web a App</p>
                    <p>Iveco On- Web a App</p>
                    <p>Iveco On- Web a App</p>
                    <p>Iveco On- Web a App</p>
            </div>
            <div className="discover-wrapper footer-stage-el">
                    <h3>Scopri Iveco</h3>
                    <p>L'azienda</p>
                    <p>L'azienda</p>
                    <p>L'azienda</p>
                    <p>L'azienda</p>
            </div>
            <div className="follow-us-wrapper footer-stage-el">
                    <h3>Follow us on</h3>
                    <img src={fbIcon} alt="" className='fb-image'/>
                    <img src={fbIcon} alt="" />
                    <img src={fbIcon} alt="" />
                    <img src={fbIcon} alt="" />
                    <img src={fbIcon} alt="" />
                    <img src={fbIcon} alt="" />
                    <div className="contact-us-footer">
                        <h3>Contact us</h3>
                        <button className='buttons'>Contattiaci <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12.5H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 7.5L21 12.5L16 17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                        </button>
                        <button className='buttons'>Contattiaci
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12.5H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 7.5L21 12.5L16 17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                        </button>
                    </div>
            </div>
        </div>
            <div className="company-info">
                <div className="maintenance-info">
                    <p>Dealer Welcome Portal</p>
                    <p>Network  Location</p>
                    <p>Network  Location</p>
                    <p>Network  Location</p>
                    <p>Network  Location</p>
                    <p>Network  Location</p>
                </div>
                <div className="cookies">
                    <p>Cookies Policy</p>
                    <p>Cookies Policy</p>
                    <p>Cookies Policy</p>
                    <p>Cookies Policy</p>
                    <p>Cookies Policy</p>
                    <p>Cookies Policy</p>
                </div>
            </div>
    </section>
  )
}

export default Footer