import React from "react";
import Header from "./head/Header/Header"
import Stage from "./head/stage/Stage";
import Header2 from "./automotive/header/Header2";
import Stage2 from "./automotive/stage/Stage2";
import Page3 from "./motivation/motivation";
import Services  from './services/Services'
import Promotion from "./promotion/Promotion";
import Channel from "./channel/Channel";
import News from "./news/News"
import Footer from "./footer/Footer";

console.log("test");
function App() {
  return (
    <div>
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
