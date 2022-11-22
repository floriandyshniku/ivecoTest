import React from "react";
import "./News.scss";
import card3 from "../Images/Rectangle3.png";

function News() {
  return (
    <section className="news-container">
      <div className="news-header">
        <h1>News</h1>
      </div>
      <div className="news-wrapper">
        <div className="news-info-wrapper">
          <p>
            Our newsletters are a concentrated blast of all latest from iveco:
            news, events, product information, and more.
          </p>
          <button className="buttons">
            Read all manifesto{" "}
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
          <button className="buttons">
            Read all manifesto{" "}
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
          <button className="buttons">
            Read all manifesto{" "}
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
        <div className="news-slide">
          <div className="news-grid-img">
            <img src={card3} alt="" />
          </div>
          <div className="news">
            <div className="hashtag-news">
              <p>#IvecoGroup</p>
            </div>
            <div className="news-title">
              <h4>
                Low rate hire purchase on the new Iveco daily 3 years at 0.99%
              </h4>
            </div>
            <div className="text-button">
              <p>
                Text button
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
        </div>
        <div className="news-slide">
          <div className="news-grid-img">
            <img src={card3} alt="" />
          </div>
          <div className="news">
            <div className="hashtag-news">
              <p>#IvecoGroup</p>
            </div>
            <div className="news-title">
              <h4>
                Low rate hire purchase on the new Iveco daily 3 years at 0.99%
              </h4>
            </div>
            <div className="text-button">
              <p>
                Text button
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
        </div>
      </div>
    </section>
  );
}

export default News;
