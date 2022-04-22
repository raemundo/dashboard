import React from "react";
import person from "./person.png"
import "./Card.css";
export default function Card() {
    return (
        <div className="card-st">
            <img src={person} alt="" />
            <div className="cid">#1234</div>
            <div className="duration">2h remaining</div>
        </div>
    )
}