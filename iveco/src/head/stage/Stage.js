import React ,{useRef} from 'react'
import "./Stage.scss"
import blueEl from "../../Images/slider-button.png"
import vehicles from "../../Images/vehicles.png"
import dailyLogo from "../../Images/daily.png"
import amazonLogo from "../../Images/alexa-amazon.png"
import union from "../../Images/union.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Stage() {
  

  const elementRef = useRef(null)
  const scrollBottom = () => {
    elementRef.current.nextSibling.scrollIntoView({

      behavior: "smooth",

      top: "start",

    });
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
 
  };
  return (
    <>
    <section className='stage-wrapper' ref={elementRef}>
    <Slider {...settings}>
          <div>
          <div className="slide-container">
        
        <div className="page-title-module">
          <div className="img-wrapper">
            <img src={blueEl} alt="" />
          </div>
          <div className="title-content">
            <h2>Driver Pal with Alexa</h2>
            <p>Maximum long description made by two lines of text</p>
          </div>
        </div>
        <div className="iveco-content">
          <img src={vehicles} alt="" />
        </div>
        <div className="images-content">
          <img src={dailyLogo} alt="" className='images-content'/>
          <img src={amazonLogo} alt="" />
        </div>
        <div className="scroll-el">
          <img src={union} alt="" onClick={scrollBottom} />
        </div>
      </div>
          </div>
          <div>
          <div className="slide-container">
        <div className="page-title-module">
          <div className="img-wrapper">
            <img src={blueEl} alt="" />
          </div>
          <div className="title-content">
            <h2>Driver Pal </h2>
            <p>Maximum long description made by two lines of text</p>
          </div>
        </div>
        <div className="iveco-content">
          <img src={vehicles} alt="" />
        </div>
        <div className="images-content">
          <img src={dailyLogo} alt="" className='images-content'/>
          <img src={amazonLogo} alt="" />
        </div>
        <div className="scroll-el">
          <img src={union} alt="" onClick={scrollBottom}/>
        </div>
      </div>
          </div>
          <div>
          <div className="slide-container">
        <div className="page-title-module">
          <div className="img-wrapper">
            <img src={blueEl} alt="" />
          </div>
          <div className="title-content">
            <h2>Lorem ipsum dolor</h2>
            <p>Maximum long description made by two lines of text</p>
          </div>
        </div>
        <div className="iveco-content">
          <img src={vehicles} alt="" />
        </div>
        <div className="images-content">
          <img src={dailyLogo} alt="" className='images-content'/>
          <img src={amazonLogo} alt="" />
        </div>
        <div className="scroll-el">
          <img src={union} alt="" onClick={scrollBottom}/>
        </div>
      </div>
          </div>
          <div>
          <div className="slide-container">
        <div className="page-title-module">
          <div className="img-wrapper">
            <img src={blueEl} alt="" />
          </div>
          <div className="title-content">
            <h2>Title</h2>
            <p>Maximum long description made by two lines of text</p>
          </div>
        </div>
        <div className="iveco-content">
          <img src={vehicles} alt="" />
        </div>
        <div className="images-content">
          <img src={dailyLogo} alt="" className='images-content'/>
          <img src={amazonLogo} alt="" />
        </div>
        <div className="scroll-el">
          <img src={union} alt=""onClick={scrollBottom} />
        </div>
        </div>
          </div>
          
        </Slider>
      
    </section>
    </>
  )
}

export default Stage