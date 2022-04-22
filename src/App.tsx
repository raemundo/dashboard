import React from "react";
import Sidebar from "./components/Sidebar";
import './styles/main.css';
import './assets/Your-Doodle-Font.ttf';
import './assets/Baloo-Regular.ttf';
import CardContainer from "./components/CardContainer/indxe";
import Head from "./components/Head";
function App() {
  return (
    <>
      <div className="d-flex w-full">
        <Sidebar />
        <main className="main">
          <Head/>
          <CardContainer num={4} headTxt="bloodles working" />
          <CardContainer num={5} headTxt="bloodles on cooldown" />
        </main>
      </div>
    </>
  );
}

export default App;
