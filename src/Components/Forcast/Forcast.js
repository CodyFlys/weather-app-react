import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Conditions } from '../Conditions/Conditions';



export const Forcast = () => {

    let [unit, setUnit] = useState('imperial')
    let [zipcode, setZipCode] = useState(98037)
    let [weather, setWeather] = useState({})
    let [weatherforcast, setWeatherForcast] = useState([{}])
    let [zipCodePlaceHolder, setZipCodePlaceHolder] = useState(zipcode);

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCodePlaceHolder}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response => {
            if (response.data.cod !== 200) {
                throw new Error()
            }

            setWeather(response.data)
        })
        .catch(err => {
            console.log(err.message)
        })

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response => {
            if (response.data.cod !== "200") {
                throw new Error()
            }

            setWeatherForcast(response.data)
        })
        .catch(err => {
            console.log(err.message)
        })
        
    }, [zipcode])

    useEffect(() => {
        
    })


    const handleChangeZipCode = (event) => {
        setZipCodePlaceHolder(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setZipCode(zipCodePlaceHolder)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" placeholder="Enter Your ZipCode" onChange={handleChangeZipCode} value={zipCodePlaceHolder} className="search-bar">
                </input>
            </form>
            <Conditions 
            weather={weather}
            weatherforcast={weatherforcast} 
            zipcode={zipcode}
            />
        </div>
    )
}