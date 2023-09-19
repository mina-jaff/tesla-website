import Charging from './Charging';
import Discover from './Discover';
import Energy from './Energy';
import Shop from './Shop';
import Vehicles from './Vehicles';

function Modal(props) {
    const { index } = props;
    console.log(index);
    /* let obj = {
        1: 'A hamster had a good time on the road. It was a tricky road but a funny one, and it lead all the way through Ireland, through the Irish countryside, and the sun was round, and Cork was in the South.',
        2: 'Then again, sometimes good days happened and someitmes bad days happened, but what was it to a hamster hamstering around? Wiggling his way through the green desert? He was a content hamster and contended.'
    } */
    // best to store array and map through it and create divs for each array element respectively
    // or should I make it a list?
    // or I could simply create 5 subcomponents for each nav element respectively
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