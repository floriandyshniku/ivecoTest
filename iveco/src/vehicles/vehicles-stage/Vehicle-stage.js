import "./Vehicle-stage.scss";
import React, { useState } from "react";
import data from "../../data/data";

function Stage2() {
  const allCatVehicles = [...new Set(data.map((currElem) => {return currElem.category;})),"all"]
  console.log(allCatVehicles)
  const [items, setItems] = useState(data);
  const [vehcilesItem, setVehiclesItem] = useState(allCatVehicles)
  const filterItems = (categoryItem) => {
    if(categoryItem === "all"){
      setItems(data)
    }
    else{
      const updatedItems = data.filter((currElem) => {
        return currElem.category === categoryItem;
      });
      setItems(updatedItems);
    }
  };

  return (
    <section className="vehicles-container">
      <div className="vehicles-wrapper">
        <div className="tab-items">
          {/* {vehcilesItem.map((curCatElem) => {
            return <button onClick={() => filterItems({curCatElem})}>{curCatElem}</button>

          })} */}
          
          <button onClick={() => filterItems("all")}>Tutti i veicoli</button>
          <button onClick={() => filterItems("B")}>Tutti i veicoli</button>
          <button onClick={() => filterItems("B")}>Tutti i veicoli</button>
          <button onClick={() => filterItems("C")}>Tutti i veicoli</button>
          <button onClick={() => filterItems("D")}>Tutti i veicoli</button>
          <button onClick={() => filterItems("E")}>Tutti i veicoli</button>
          <button onClick={() => filterItems("F")}>Tutti i veicoli</button>
        </div>
        <div className="container">
          <div className="description-label">
            <p>Light 3.3-7.2t</p>
          </div>
          <div className="vehicles-properties">
            {items.map((elem) => {
              const { name, image } = elem;
              return (
                <div className="vehicles-content">
                  <img src={image} alt="" />
                  <p>{name}</p>
                  <span className="star-svg">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.986 7.47434L11.4538 1.98442C11.2751 1.59699 10.7244 1.59699 10.5457 1.98442L8.01347 7.47434C7.94064 7.63224 7.791 7.74096 7.61831 7.76144L1.61459 8.47327C1.19089 8.52351 1.02073 9.0472 1.33398 9.33689L5.77269 13.4417C5.90036 13.5597 5.95752 13.7357 5.92363 13.9062L4.74537 19.8361C4.66222 20.2545 5.1077 20.5782 5.48001 20.3698L10.7555 17.4168C10.9073 17.3319 11.0922 17.3319 11.244 17.4168L16.5195 20.3698C16.8918 20.5782 17.3373 20.2545 17.2541 19.8361L16.0759 13.9062C16.042 13.7357 16.0991 13.5597 16.2268 13.4417L20.6655 9.33689C20.9788 9.0472 20.8086 8.52351 20.3849 8.47327L14.3812 7.76144C14.2085 7.74096 14.0589 7.63224 13.986 7.47434Z"
                        stroke="#EEEEEE"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="description-label">
            <p>Medium 3.3-7.2t</p>
          </div>
          <div className="vehicles-properties">
            {items.map((elem) => {
              const { name, image} = elem;
              return (
                <div className="vehicles-content">
                  <img src={image} alt="" />
                  <p>{name}</p>
                  <span className="star-svg">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.986 7.47434L11.4538 1.98442C11.2751 1.59699 10.7244 1.59699 10.5457 1.98442L8.01347 7.47434C7.94064 7.63224 7.791 7.74096 7.61831 7.76144L1.61459 8.47327C1.19089 8.52351 1.02073 9.0472 1.33398 9.33689L5.77269 13.4417C5.90036 13.5597 5.95752 13.7357 5.92363 13.9062L4.74537 19.8361C4.66222 20.2545 5.1077 20.5782 5.48001 20.3698L10.7555 17.4168C10.9073 17.3319 11.0922 17.3319 11.244 17.4168L16.5195 20.3698C16.8918 20.5782 17.3373 20.2545 17.2541 19.8361L16.0759 13.9062C16.042 13.7357 16.0991 13.5597 16.2268 13.4417L20.6655 9.33689C20.9788 9.0472 20.8086 8.52351 20.3849 8.47327L14.3812 7.76144C14.2085 7.74096 14.0589 7.63224 13.986 7.47434Z"
                        stroke="#EEEEEE"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="description-label">
            <p>Height 3.3-7.2t</p>
          </div>
          <div className="vehicles-properties">
            {items.map((elem) => {
              const { name, image } = elem;
              return (
                <div className="vehicles-content">
                  <img src={image} alt="" />
                  <p>{name}</p>
                  <span className="star-svg">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.986 7.47434L11.4538 1.98442C11.2751 1.59699 10.7244 1.59699 10.5457 1.98442L8.01347 7.47434C7.94064 7.63224 7.791 7.74096 7.61831 7.76144L1.61459 8.47327C1.19089 8.52351 1.02073 9.0472 1.33398 9.33689L5.77269 13.4417C5.90036 13.5597 5.95752 13.7357 5.92363 13.9062L4.74537 19.8361C4.66222 20.2545 5.1077 20.5782 5.48001 20.3698L10.7555 17.4168C10.9073 17.3319 11.0922 17.3319 11.244 17.4168L16.5195 20.3698C16.8918 20.5782 17.3373 20.2545 17.2541 19.8361L16.0759 13.9062C16.042 13.7357 16.0991 13.5597 16.2268 13.4417L20.6655 9.33689C20.9788 9.0472 20.8086 8.52351 20.3849 8.47327L14.3812 7.76144C14.2085 7.74096 14.0589 7.63224 13.986 7.47434Z"
                        stroke="#EEEEEE"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stage2;
