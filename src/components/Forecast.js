import React from 'react';
import PropTypes from 'prop-types';

const Forecast = ({name, main}) => {
    if(!name)return null
    const kelvin = 273.15
    return (
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>El clima de {name}</h2>
                <p className='temp'>{(main.temp - kelvin).toFixed(2)} <span> &#x2103; </span></p>
                <p className='temp'>Temperatura Maxima: {parseFloat((main.temp_max- kelvin)).toFixed(2)} <span> &#x2103; </span></p>
                <p className='temp'>Temperatura Minima: {parseFloat((main.temp_min- kelvin)).toFixed(2)} <span> &#x2103; </span></p>
            </div>
        </div>
    );
};

Forecast.prototype = {
    name: PropTypes.string.isRequired,
    main: PropTypes.object.isRequired
}

export default Forecast;