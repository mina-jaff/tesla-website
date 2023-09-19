import React, { useEffect, useState } from 'react';

function Main(){
    
    return (
        <div className="main">
            <img className="car-img" id="car-1" src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop"/>
            <img className="car-img" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg"/>
            <img className="car-img" src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD"/>
            <img className="car-img" src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D"/>
            <div className="main-content">
                <div className="main-top">
                    <h1 className="model">Model S</h1>
                    <p className="price">From $71,090*</p>
                    <p className="est">After Federal Tax Credit & Est. Gas Savings</p>
                </div>
                <div className="main-bottom">
                    <div className="main-btns">
                        <button className="main-btn" id="main-btn-1">Order Now</button>
                        <button className="main-btn" id="main-btn-2">Demo Drive</button>
                    </div>
                    <div className="bottom-text">
                        <p className="est">
                            *Price before savings is $74,990, excluding taxes and fees. Subject to change.
                        </p>
                        <a href="" className="est">
                            Learn about est. gas savings.
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;