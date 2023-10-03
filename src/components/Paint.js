import React, { useState } from 'react';

function Paint() {
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ['Midnight Silver Metallic', 'Pearl White Multi-Coat', 'Deep Blue Metallic', 'Solid Black', 'Red Multi-Coat'];

    return (
        <div className="padded">
        <p className="medium">Paint</p>
        <div className="features">
            <div onClick={() => setColorIndex(0)}>
                <img className={colorIndex === 0 ? "paint-img-selected": "paint-img"}
                    src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_MidnightSilver.png?" 
                />
            </div>
            <div onClick={() => setColorIndex(1)}>
                <img className={colorIndex === 1 ? "paint-img-selected": "paint-img"} src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_White.png?" />
            </div>
            <div onClick={() => setColorIndex(2)}>
                <img className={colorIndex === 2 ? "paint-img-selected": "paint-img"} src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Blue.png?" />
            </div>
            <div onClick={() => setColorIndex(3)}>
                <img className={colorIndex === 3 ? "paint-img-selected": "paint-img"} src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Black.png?" />
            </div>
            <div onClick={() => setColorIndex(4)}>
                <img className={colorIndex === 4 ? "paint-img-selected": "paint-img"} src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Red.png?" />
            </div>
        </div>
        <p className="regular-bold">{colors[colorIndex]}</p>
        </div>
    )
}

export default Paint;