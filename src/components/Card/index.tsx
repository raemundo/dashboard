import React from "react";
import person from "./person.png"
export default function Card () {
    return (
        <div className="card">
            <img src={person} />
            <div className="cid">#1234</div>
            <div className="duration">2h remaining hours</div>
        </div>
    )
}