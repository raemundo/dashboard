import React from 'react'
import Bloodle_Male from "./imgs/Bloodle_Male.png"

export default function TopSidebar() {
    return (
        <div className="top-sidebar">
            <a href="/" className="logo">
                <img alt="" src={Bloodle_Male} />
            </a>
        </div>
    )
}
