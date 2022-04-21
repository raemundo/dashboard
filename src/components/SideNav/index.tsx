import React from "react";
import Work from "./imgs/Work.png"
import BLMBankIcon from "./imgs/BLMBankIcon.png"
import breeding from "./imgs/breeding.png"
import DashboardIcon from "./imgs/DashboardIcon.png"
import EduCertIcon from "./imgs/EduCertIcon.png"
import HousingIcon from "./imgs/HousingIcon.png"
import MarketplaceIcon from "./imgs/MarketplaceIcon.png"
import twitter from "./imgs/twitter.png"
import discord from "./imgs/discord.png"
import Bloodle_Male from "./imgs/Bloodle_Male.png"

const SideNav = () => {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="top-sidebar">
        <a href="#" className="logo">
          <img src={Bloodle_Male} />
        </a>
      </div>
      <div className="middle-sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="#" className="sidebar-link">
              <img src={DashboardIcon} />
              <div className="sidebar-txt">Dashboard</div>
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" className="sidebar-link">
              <img src={Work} />
              <div className="sidebar-txt">Work</div>
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" className="sidebar-link">
              <img src={breeding} />
              <div className="sidebar-txt">Breeding</div>
            </a>
          </li>

          
          <li className="sidebar-list-item">
            <a href="#" className="sidebar-link">
              <img src={HousingIcon} />
              <div className="sidebar-txt">Housing</div>
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" className="sidebar-link">
              <img src={EduCertIcon} />
              <div className="sidebar-txt">Edu. Cert.</div>
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" className="sidebar-link">
              <img src={MarketplaceIcon} />
              <div className="sidebar-txt">WL Shop</div>
            </a>
          </li>
        
          <li className="sidebar-list-item">
            <a href="#" className="sidebar-link">
              <img src={BLMBankIcon} />
              <div className="sidebar-txt">BLM Bank</div>
            </a>
          </li>

        </ul>
      </div>
      <div className="bottom-sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="#" className="sidebar-link">
              <img src={twitter} />
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#" className="sidebar-link">
              <img src={discord} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
};

export default SideNav;
