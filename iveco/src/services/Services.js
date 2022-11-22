import React from "react";
import "./Services.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideImg from "../Images/slider.png";
import ferrota from "../Images/ferrota2.png";

function Services() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // fade: true,
    slidesToShow: 3.4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <section className="services-wrapper">
      <div className="services-header">
        <h1>Services</h1>
        <button className="buttons">
          Enter Iveco Service Area
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
      <div className="service-slider-wrapper">
        <Slider {...settings}>
          <div className="slider-container-slick">
            <div className="slide-content">
              <div className="image-slide">
                <img src={slideImg} alt="" />
              </div>
              <div className="slide-description">
                <p>Label</p>
                <h4>
                  Iveco ON: Check your fleet efficiency, it's never been so easy
                </h4>
                <p>
                  Read more{" "}
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
                  </svg>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="slider-container-slick">
            <div className="slide-content">
              <div className="image-slide">
                <img src={ferrota} alt="" />
              </div>
              <div className="slide-description">
                <p>Label</p>
                <h4>
                  Iveco ON: Check your fleet efficiency, it's never been so easy
                </h4>
                <p>
                  Read more{" "}
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
                  </svg>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="slider-container-slick">
            <div className="slide-content">
              <div className="image-slide">
                <img src={slideImg} alt="" />
              </div>
              <div className="slide-description">
                <p>Label</p>
                <h4>
                  Iveco ON: Check your fleet efficiency, it's never been so easy
                </h4>
                <p>
                  Read more{" "}
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
                  </svg>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="slider-container-slick">
            <div className="slide-content">
              <div className="image-slide">
                <img src={slideImg} alt="" />
              </div>
              <div className="slide-description">
                <p>Label</p>
                <h4>
                  Iveco ON: Check your fleet efficiency, it's never been so easy
                </h4>
                <p>
                  Read more{" "}
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
                  </svg>{" "}
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Services;
