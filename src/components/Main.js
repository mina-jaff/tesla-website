import React, { useEffect, useState } from 'react';

function Main() {
    // State to track the currently visible car model
    const [currentCarModel, setCurrentCarModel] = useState(0);

    const triggerPositions = [0, 0.3, 0.6, 0.9];

    // Scroll event handler
    const handleScroll = () => {
        // Calculate the scroll position (percentage)
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const totalHeight = document.body.clientHeight;
        const scrollPercentage = scrollY / (totalHeight - windowHeight);

        // Determine the currently visible car model
        let newCurrentModel = 0;
        for (let i = 1; i < triggerPositions.length; i++) {
            if (scrollPercentage >= triggerPositions[i]) {
                newCurrentModel = i;
            } else {
                break;
            }
        }

        // Update the current car model if it has changed
        if (newCurrentModel !== currentCarModel) {
            setCurrentCarModel(newCurrentModel);
        }
    };

    // Attach scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentCarModel]);

    const carModels = [
        { id: 'model-y', name: 'Model Y', price: 'From $39,390*', tax: true, est: "$50,490", imageUrl: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop"},
        { name: 'Model S', price: 'From $71,090*', tax: true, est: "$74,990", imageUrl: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg"},
        { name: 'Model X', price: 'From $68,590*', tax: true, est: "$79,990", imageUrl: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD"},
        { name: 'Solar Panels', link: 'Schedule a Virtual Consultation', tax: false, est: false, imageUrl: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D"},
    ];

    return (
        <div className="main">
            {carModels.map((model, index) => (
                <img
                    key={index}
                    className={`car-img ${currentCarModel === index ? 'visible' : 'hidden'} ${model.id === 'model-y' ? 'model-y' : ''}`}
                    src={model.imageUrl}
                />
            ))}

            <div className="main-content">
                {/* Render the content based on the currentCarModel state */}
                <div className="main-top">
                    <h1 className="model">{carModels[currentCarModel].name}</h1>
                    {carModels[currentCarModel].price ? <p className="price">{carModels[currentCarModel].price}</p> : <a href="">{carModels[currentCarModel].link}</a>}
                    <p className="est">{carModels[currentCarModel].tax ? 'After Federal Tax Credit & Est. Gas Savings' : ''}</p>
                </div>
                <div className="main-bottom">
                    <div className="main-btns">
                        <button className="main-btn" id="main-btn-1">Order Now</button>
                        <button className="main-btn" id="main-btn-2">
                            {carModels[currentCarModel].tax ? "Demo Drive" : "Learn More"}
                        </button>
                    </div>
                    <div className="bottom-text">
                        {carModels[currentCarModel].est ? 
                            <div>
                                <p className="est">
                                    {`*Price before savings is ${carModels[currentCarModel].est}, excluding taxes and fees. Subject to change.`}
                                </p> 
                                <a href="" className="est">
                                    Learn about est. gas savings.
                                </a>
                            </div>
                        : ""}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
