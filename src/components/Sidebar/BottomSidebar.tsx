import React from 'react'

import twitter from "./imgs/twitter.png"
import discord from "./imgs/discord.png"

export default function BottomSidebar() {
    return (
        <div className="bottom-sidebar">
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="/" className="sidebar-link">
                        <img alt="" src={twitter} />
                    </a>
                </li>
                <li className="sidebar-list-item mt-23">
                    <a href="/" className="sidebar-link">
                        <img alt="" src={discord} />
                    </a>
                </li>
            </ul>
        </div>
    )
}
