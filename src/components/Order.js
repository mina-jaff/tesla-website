import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paint from './Paint';
import logo from '../logo.svg';

function Order(props) {
    const { image, modelName, data } = props;
    const [selectedButton, setSelectedButton] = useState('savings');
    const [filterButton, setFilterButton] = useState('standard');
    const left = '<';
    const right = '>';


    const handlePriceButtonClick = (button) => {
        setSelectedButton(button);
    };

    const handleFilterButtonClick = (version) => {
        setFilterButton(version);
    }

    const renderDriveTrainButtons = (driveTrainType) => {
        const filteredModels = Object.values(data).filter(
          (model) => model.drive_train === driveTrainType
        );
    
        if (filteredModels.length === 0) {
          return null;
        }

        return (
            <div>
              <p className="regular-bold">{driveTrainType}</p>
              {filteredModels.map((model, index) => (
                <div key={index} className={filterButton === model.version ? 'thin-border-btn-blue' : 'thin-border-btn'} onClick={() => handleFilterButtonClick(model.version)}>
                    <span>{model.name}</span>
                    <span>{`$${selectedButton === 'savings' ? model.savings_price.toLocaleString() : model.purchase_price.toLocaleString()}`}</span>
                </div>
              ))}
              {driveTrainType === 'Rear Wheel Drive' && <p className="gray-thin">Learn more about range and performance</p>}
              {driveTrainType === 'Dual Motor All Wheel Drive' && <p className="gray-thin">
                * Prices assume $7,500 IRA Federal Tax Credit (not all customers qualify) and est. gas savings of 
                $3,000 over 3 years.See Details</p>
                }
            </div>
          );
    };

    return (
            <>
                <div className="header-wrapper">
                    <header className="header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <div>
                            <FontAwesomeIcon className="icon" icon="globe" />
                            <span className="lang">US</span>
                        </div>
                    </header>
                </div>
                <div className="order-main">
                    <div className="order-left">
                        <img className="car-perspective" src={image} />
                        <div className="btn-row">
                            <button className="inc-btn">{left}</button>
                            <button className="inc-btn">{right}</button>
                        </div>
                    </div>
                    <div className="order-right">
                        <div className="tax-credit">
                            <h2>$7,500</h2>
                            <h3>Federal Tax Credit</h3>
                            <p>
                                All new Model 3 vehicles currently qualify for a federal tax credit for eligible buyers. 
                                Reductions likely after Dec 31.
                            </p>
                            <a href="">See Details</a>
                        </div>
                        <h1 className="model">{modelName}</h1>
                        <p>Est. Delivery: Oct – Nov 2023</p>
                        <p>Delivery ZIP Code: <a href="">98109</a></p>
                        <div className="price-nav">
                        <button
                            className={`price-nav-btn ${selectedButton === 'price' ? 'price-nav-btn-selected' : ''}`}
                            onClick={() => handlePriceButtonClick('price')}
                        >
                            Purchase Price
                        </button>
                        <button
                            className={`price-nav-btn ${selectedButton === 'savings' ? 'price-nav-btn-selected' : ''}`}
                            onClick={() => handlePriceButtonClick('savings')}
                        >
                            Probable Savings*
                        </button>
                        </div>
                        <div className="features">
                            <div className="features-col">
                                <span className="medium">{data?.['standard']?.range[data?.['standard']?.range.length-1]}<span className="regular-bold">mi</span></span>
                                <p className="gray-thin">Range (EPA est.)</p>
                            </div>
                            <div className="features-col">
                                <span className="medium">{data?.['standard']?.top_speed}<span className="regular-bold">mph</span></span>
                                <p className="gray-thin">Top Speed</p>
                            </div>
                            <div className="features-col">
                                <span className="medium">{data?.['standard']?.mph}<span className="regular-bold">sec</span></span>
                                <p className="gray-thin">0-60 mph</p>
                            </div>
                        </div>
                        <div className="left-aligned">
                            {renderDriveTrainButtons('Rear Wheel Drive')}
                            {renderDriveTrainButtons('Dual Motor All Wheel Drive')}
                        </div>
                        <Paint />
                    </div>
                </div>
            </>
    );
};

export default Order;