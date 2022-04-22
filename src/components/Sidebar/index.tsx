import React from "react";
import "./Sidebar.css";
import TopSidebar from "./TopSidebar";
import MiddleSidebar from "./MiddleSidebar";
import BottomSidebar from "./BottomSidebar";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <TopSidebar />
      <MiddleSidebar />
      <BottomSidebar />
    </aside>
  )
};