import React from 'react'
import Work from "./imgs/Work.png"
import BLMBankIcon from "./imgs/BLMBankIcon.png"
import breeding from "./imgs/breeding.png"
import DashboardIcon from "./imgs/DashboardIcon.png"
import EduCertIcon from "./imgs/EduCertIcon.png"
import HousingIcon from "./imgs/HousingIcon.png"
import MarketplaceIcon from "./imgs/MarketplaceIcon.png"

export default function MiddleSidebar() {
    return (
        <div className="middle-sidebar">
            <ul className="sidebar-list">
                <li className="sidebar-list-item active-link">
                    <a href="/" className="sidebar-link">
                        <img alt="" src={DashboardIcon} />
                        <div className="sidebar-txt">Dashboard</div>
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="/" className="sidebar-link">
                        <img alt="" src={Work} />
                        <div className="sidebar-txt">Work</div>
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="/" className="sidebar-link">
                        <img alt="" src={breeding} />
                        <div className="sidebar-txt">Breeding</div>
                    </a>
                </li>


                <li className="sidebar-list-item">
                    <a href="/" className="sidebar-link">
                        <img alt="" src={HousingIcon} />
                        <div className="sidebar-txt">Housing</div>
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="/" className="sidebar-link">
                        <img alt="" src={EduCertIcon} />
                        <div className="sidebar-txt">Edu. Cert.</div>
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="/" className="sidebar-link">
                        <img alt="" src={MarketplaceIcon} />
                        <div className="sidebar-txt">WL Shop</div>
                    </a>
                </li>

                <li className="sidebar-list-item">
                    <a href="/" className="sidebar-link">
                        <img alt="" src={BLMBankIcon} />
                        <div className="sidebar-txt">BLM Bank</div>
                    </a>
                </li>

            </ul>
        </div>
    )
}
