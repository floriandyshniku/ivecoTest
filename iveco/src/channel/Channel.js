import React from "react";
import "./Channel.scss";
import card2 from "../Images/Rectangle2.png";
import card from "../Images/Rectangle.png";

function Channel() {
  return (
    <section className="live-channel">
      <div className="channel-header white-text">
        <div className="title-channel-wrapper">
          <div className="title-chanel">
            <h1 className="header-size">Live Channel</h1>
          </div>
          <div className="decription-chanel">
            <p>ON AIR NOW New Iveco T-way 2022 launch</p>
            <button className="buttons">
              Watch now{" "}
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
        </div>
      </div>
      <div className="channel-slider-container">
        <div className="channel-slide ">
          <div className="channel-grid-img">
            <img src={card} alt="" />
          </div>
          <div className="channel-description">
            <p>Valid until December 31st 2021</p>
            {/* <h4>Low rate hire purchase on the new Iveco daily  3 years at 0.99%</h4> */}
          </div>
          <p className="read-more text-channel">
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
            </svg>
          </p>
        </div>
        <div className="promotion-slide  channel-slide ">
          <div className="channel-grid-img">
            <img src={card2} alt="" />
          </div>
          <div className="channel-description">
            <p>Valid until December 31st 2021</p>
            {/* <h4>Low rate hire purchase on the new Iveco daily  3 years at 0.99%</h4> */}
          </div>
          <p className="read-more text-channel">
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
            </svg>
          </p>
        </div>
        <div className="promotion-slide  channel-slide ">
          <div className="channel-grid-img">
            <img src={card2} alt="" />
          </div>
          <div className="channel-description">
            <p>Valid until December 31st 2021</p>
          </div>
          <p className="read-more text-channel">
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
            </svg>
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default Channel;
