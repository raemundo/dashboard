import React from 'react'
import Card from '../Card'

export default function CardContainer({num, headTxt}) {
    return (
        <div className="card-container">

            <h2 className="head">{headTxt}</h2>
            <div className="flex">
                {/* @ts-ignore */}
                {[...Array(num).keys()].map((idx, item) => (
                    <Card key={idx} />
                ))}
            </div>
        </div>
    )
}
