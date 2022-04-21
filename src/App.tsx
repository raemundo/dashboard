import React from "react";
import SideNav from "./components/SideNav";
import './styles/main.css';
import './assets/Your-Doodle-Font.ttf';
import './assets/Baloo-Regular.ttf';

function App() {
  return (
    <>
      <div className="container">
        <SideNav />
        <main className="main">
          <div className="btn-container">
            <button className="connect-btn">Conncect Wallet</button>
          </div>
          <div className="msg-container">
            <div>
              <h1 className="head">
                welcome to <br />
                the bloodeverse<br />
              </h1>
              <h2 className="desc">
                connect your wallet to enter the app
              </h2>
            </div>
          </div>

        </main>
      </div>
    </>
  );
}

export default App;
