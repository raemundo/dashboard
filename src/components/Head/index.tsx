import React from 'react'
import "./Head.css";
export default function Head() {
    return (
        <div className="d-flex flex-wrap space-between header-c mb-74">
            <div className="mt-6">
                <div className="main-txt">Send your bloodles to work</div>
                <button className="connect-btn">Exit the Bloodeverse &nbsp; &nbsp;&nbsp; &nbsp; </button>

            </div>
            <div className="mt-6">
                <div className="">
                    <button className="connect-btn pl-59 pr-47">0xBE4256....Xsd</button>
                </div>
                <div className="balance">
                    <span className='balance-txt'>Balance:</span> <span >1500</span> <span>$BLM</span>
                </div>
            </div>
        </div>
    )
}
