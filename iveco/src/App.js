import React from "react";
import Header from "./head/header/Header"
import Stage from "./head/stage/Stage";
import Header2 from "./vehicles/vehicles-header/Vehicle-header";
import Stage2 from "./vehicles/vehicles-stage/Vehicle-stage";
import Page3 from "./motivation/motivation";
import Services  from './services/Services'
import Promotion from "./promotion/Promotion";
import Channel from "./channel/Channel";
import News from "./news/News"
import Footer from "./footer/Footer";

console.log("test");
function App() {
  return (
    <div  className="main-container">
      <Header />
      <Stage />
      <Header2 />
      <Stage2 />
      <Page3/>
      <Services/>
      <Promotion/>
      <Channel/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
