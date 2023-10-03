import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppHeader from './AppHeader';
import model3 from '../assets/model3.jpg';

function Main() {
    const [models, setModels] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/car-models')
            .then(response => response.json())
            .then(data => {
                let copy = [...data];
                copy.push({ name: 'Solar Panels', link: 'Schedule a Virtual Consultation', image_url: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D" });
    
                setModels(copy);
            })
            .catch(error => console.error('Error fetching car models', error));
    }, []);

    const [currentModel, setCurrentModel] = useState(0);
    const triggerPositions = [0, 0.2, 0.4, 0.6, 0.8];

    const handleScroll = () => {
        // Calculate the scroll position (percentage)
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const totalHeight = document.body.clientHeight;
        const scrollPercentage = scrollY / (totalHeight - windowHeight);

        let newCurrentModel = 0;
        for (let i = 1; i < triggerPositions.length; i++) {
            if (scrollPercentage >= triggerPositions[i]) {
                newCurrentModel = i;
            } else {
                break;
            }
        }

        // Update the current car model if it has changed
        if (newCurrentModel !== currentModel) {
            setCurrentModel(newCurrentModel);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentModel]);

    return (
        <>
        <AppHeader />
        <div className="main">
            {models?.map((model, index) => (
                <img
                    key={index}
                    className={`car-img ${currentModel === index ? 'visible' : 'hidden'} ${model.id === 'model-y' ? 'model-y' : ''}`}
                    src={model.image_url? model.image_url : model3}
                    alt={model.name}
                />
            ))}
            <div className="main-content">
                <div className="main-top">
                    <h1 className="model">{models[currentModel]?.name}</h1>
                    {models[currentModel]?.wheels ? <p className="price">{`From $${models[currentModel]?.base_savings.toLocaleString()}*`}</p> : <a href="">{models[currentModel]?.link}</a>}
                    <p className="est">{models[currentModel]?.wheels ? 'After Federal Tax Credit & Est. Gas Savings' : ''}</p>
                </div>
                <div className="main-bottom">
                    <div className="main-btns">
                    <Link to={`/${models[currentModel]?.model_name}`}>
                        <button className="main-btn" id="main-btn-1">Order Now</button>
                    </Link>
                        <button className="main-btn" id="main-btn-2">
                            {models[currentModel]?.wheels ? "Demo Drive" : "Learn More"}
                        </button>
                    </div>
                    <div className="bottom-text">
                        {models[currentModel]?.wheels ? 
                            <div>
                                <p className="est">
                                    {`*Price before savings is $${models[currentModel]?.base_price.toLocaleString()}, excluding taxes and fees. Subject to change.`}
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
        </>
    );
}

export default Main;
