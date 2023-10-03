import Order from './Order';

function ModelS() {
    const images = ['https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSW,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSW,$WS91,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSW,$WS91,$IBE00&view=REAR34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSW,$WS91,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSW,$IBE00,$ST03&view=INTERIOR&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&'];

    return (
        <Order title={'Model S'} />
    );
};

export default ModelS;