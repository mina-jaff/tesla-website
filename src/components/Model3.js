import React, { useEffect, useState } from 'react';
import Order from './Order';

function Model3() {
    const images = ['https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PMNG,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PMNG,$W40B,$IBB1&view=STUD_SIDEVIEW&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PMNG,$W40B,$IBB1&view=STUD_REAR34&model=m3&size=1920&bkba_opt=2&crop=0,0,0,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PMNG,$W40B,$IBB1&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=2&crop=0,0,80,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$IBB1,$PMNG,$MT322&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=2&crop=0,0,0,0&'];

    const versions = ['standard', 'long-range', 'performance'];
    const [data, setData] = useState({});

    useEffect(() => {
        Promise.all(versions.map(version => fetch(`http://localhost:3001/model3/${version}`).then(response => response.json())))
          .then(data => {
            const combinedData = {};
            versions.forEach((version, index) => {
              combinedData[version] = data[index];
            });
            setData(combinedData);
          })
          .catch(error => console.error('Error fetching model data', error));
      }, []); 

    return (
        <Order data={data} modelName={'Model 3'} image={images[0]}/>
    );
};

export default Model3;