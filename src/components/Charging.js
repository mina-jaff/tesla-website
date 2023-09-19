function Charging() {
    return (
        <div className="modal-inner">
            <div>
                <img className="modal-inner-img" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Charging.png"/>
                <p className="shop-section">Charging</p>
            </div>
            <div>
                <img className="modal-inner-img" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Home-Charging.png"/>
                <p className="shop-section">Home Charging</p>
            </div>
            <div>
                <img className="modal-inner-img" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Apparel.png" />
                <p className="shop-section">Supercharging</p>
            </div>
            <div className="modal-inner-div">
                <ul className="modal-ul">
                    <li>Charging Calculator</li>
                    <li>Trip Planner</li>
                    <li>Supercharger Voting</li>
                    <li>Host a Supercharger</li>
                    <li>Commercial Charging</li>
                    <li>Host Wall Connectors</li>
                </ul>
            </div>
        </div>
    )
};

export default Charging;