import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Promotion.scss";
import carImg from "../Images/cars.png";
function Promotion() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };
  return (
    <section className="promotion-wrapper">
      <div className="promotion-header">
        <h1>Promotion</h1>
        <button>
          View all promotion
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12.5H21"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 7.5L21 12.5L16 17.5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="card-carousel-content">
        <Slider {...settings}>
          <div>
            <div className="card-grid-wrapper">
              <div className="no-big-image">
                <img src={carImg} alt="" />
              </div>
              <div className="card-content">
                <div className="card-grid-decsription">
                  <p>Valid until December 31st 2021</p>
                </div>
                <div className="card-grid-title">
                  <h4>
                    Driveaway your daily from jus 495$ per month with no deposit
                  </h4>
                </div>
                <div className="card-grid-readmore">
                  <p>read more</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card-grid-wrapper">
              <div className="no-big-image">
                <img src={carImg} alt="" />
              </div>
              <div className="card-content">
                <div className="card-grid-decsription">
                  <p>Valid until December 31st 2021</p>
                </div>
                <div className="card-grid-title">
                  <h4>
                    Driveaway your daily from jus 495$ per month with no deposit
                  </h4>
                </div>
                <div className="card-grid-readmore">
                  <p>read more</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card-grid-wrapper">
              <div className="no-big-image">
                <img src={carImg} alt="" />
              </div>
              <div className="card-content">
                <div className="card-grid-decsription">
                  <p>Valid until December 31st 2021</p>
                </div>
                <div className="card-grid-title">
                  <h4>
                    Driveaway your daily from jus 495$ per month with no deposit
                  </h4>
                </div>
                <div className="card-grid-readmore">
                  <p>read more</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card-grid-wrapper">
              <div className="no-big-image">
                <img src={carImg} alt="" />
              </div>
              <div className="card-content">
                <div className="card-grid-decsription">
                  <p>Valid until December 31st 2021</p>
                </div>
                <div className="card-grid-title">
                  <h4>
                    Driveaway your daily from jus 495$ per month with no deposit
                  </h4>
                </div>
                <div className="card-grid-readmore">
                  <p>read more</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Promotion;
