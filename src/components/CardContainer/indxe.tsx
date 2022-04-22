import React from 'react'
import Card from '../Card'
import "./CardContainer.css";

export default function CardContainer({num, headTxt}) {
    return (
        <div className='card-container'>
            <h2 className="head">{headTxt}</h2>
            <div className="d-flex flex-wrap">
                {/* @ts-ignore */}
                {[...Array(num).keys()].map((idx, item) => (
                    <Card key={idx} />
                ))}
            </div>
        </div>
    )
}
