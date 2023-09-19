import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './Modal';

function AppHeader(props) {
    const {logo} = props;

    const [openModal, setOpenModal] = useState(false);
    const [index, setIndex] = useState(0);

    const handleOpenModal = (ind) => {
        setOpenModal(true);
        setIndex(ind);
    }

    // perhaps closeModal function if not hover on modal

    console.log(openModal);
    return (
        <div className="App-header">
            <div className="banner">
                <p className="credit">$7,500 Federal Tax Credit</p>
                <p>Available for new Model 3, Model Y and certain Model X. Reductions to tax credit likely after Dec 31.</p>
                <a 
                    className="Details-link"
                    href=""
                >
                    See Details.
                </a>
            </div>
            <header className="header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="btn-nav">
                    <button className="nav-btn" onMouseEnter={() => handleOpenModal(1)}>Vehicles</button>
                    <button className="nav-btn" onMouseEnter={() => handleOpenModal(2)}>Energy</button>
                    <button className="nav-btn" onMouseEnter={() => handleOpenModal(3)}>Charging</button>
                    <button className="nav-btn" onMouseEnter={() => handleOpenModal(4)}>Discover</button>
                    <button className="nav-btn" onMouseEnter={() => handleOpenModal(5)}>Shop</button>
                </div>
                <div>
                    <FontAwesomeIcon className="icon" icon="question-circle" />
                    <FontAwesomeIcon className="icon" icon="globe" />
                    <FontAwesomeIcon className="icon" icon="user" />
                </div>
            </header>
            <div onMouseLeave={() => setOpenModal(false)}>
                { openModal && <Modal index={index} /> }
            </div>
      </div>
    )
}

export default AppHeader;