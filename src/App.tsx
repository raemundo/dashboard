import React from "react";
import SideNav from "./components/SideNav";
import './styles/main.css';
import './assets/Your-Doodle-Font.ttf';
import './assets/Baloo-Regular.ttf';
import CardContainer from "./components/CardContainer/indxe";
function App() {
  return (
    <>
      <div className="container">
        <SideNav />
        <main className="main">
          <div className="flex space-between header-c">

            <div className="first-column">
              <div className="main-txt">Send your bloodles to work</div>
              <button className="connect-btn">Exit the Bloodeverse</button>

            </div>

            <div className="">
              <div className="">
                <button className="connect-btn">0xBE4256....Xsd</button>
              </div>
              <div className="">
                <p>Balance: <span >1500$</span> <span>BLM</span></p>
              </div>
            </div>
          </div>



          <CardContainer num={4} headTxt="bloodles working" />
          <CardContainer num={5} headTxt="bloodles on cooldown" />

        </main>
      </div>
    </>
  );
}

export default App;
