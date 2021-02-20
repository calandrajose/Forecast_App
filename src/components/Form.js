import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {toggleState} from '../utility'
import Error from './Error'

const Form = ({request, setRequest, setCheck}) => {

    const [error, setError] = useState(false)


    const { city, country } = request

    const onChangeHandler = (e) => {
        setRequest({
            ...request,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (city.trim() === '' || country.trim() === '') {
            toggleState(1500, setError)
            return
        }
        setRequest({city, country})
        setCheck(true)
    }
    return (
        <div>
            <form
                onSubmit={onSubmitHandler}
            >
                {error ? <Error message='Todos los campos son obligatorios'/> : null}
                <div className='input-field col s12'>
                    <input
                        type='text'
                        name='city'
                        id='city'
                        value={city}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor='city'>Ciudad: </label>
                </div>
                <div className='input-field col s12'>
                    <select
                        name='country'
                        id='country'
                        value={country}
                        onChange={onChangeHandler}
                    >
                        <option value="">-- Seleccione un pais --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                    <label htmlFor='country'>Pais: </label>
                </div>
                <div className="input-field col s12">
                    <button
                        type="submit"
                        className=" black-text waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                    >Buscar Clima</button>
                </div>

            </form>

        </div>
    );
};


Form.prototype = {
    request: PropTypes.object.isRequired, 
    setRequest: PropTypes.func.isRequired,
    setCheck: PropTypes.func.isRequired
}

export default Form;