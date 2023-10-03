import Charging from './Charging';
import Discover from './Discover';
import Energy from './Energy';
import Shop from './Shop';
import Vehicles from './Vehicles';

function Modal(props) {
    const { index } = props;
    
    return (
        <div className="modal">
            { index === 1 && <Vehicles /> }
            { index === 2 && <Energy /> }
            { index === 3 && <Charging /> }
            { index === 4 && <Discover /> }
            { index === 5 && <Shop /> }
        </div>
    )
};

export default Modal;