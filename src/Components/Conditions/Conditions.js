import React, { useState } from 'react';
import moment from 'moment';
import Slider from 'infinite-react-carousel';

import { FaThermometerEmpty, FaThermometerFull } from 'react-icons/fa';

export const Conditions = (props) => {

    let currentDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
    let tomorrowDate = moment().add(1,'day').format("dddd, MMMM Do YYYY");
    let nextDayDate = moment().add(2,'day').format("dddd, MMMM Do YYYY");
    let dayThree = moment().add(3,'day').format("dddd, MMMM Do YYYY");
    let dayFour = moment().add(4,'day').format("dddd, MMMM Do YYYY");
    let dayFive = moment().add(5,'day').format("dddd, MMMM Do YYYY");

    //300K × 9/5 - 459.67
    let fTemp = (temp) => {
        return Math.round(temp * (9/5) - 459.67);
    }

    if(props.weather.cod === 200 && props.weatherforcast.cod === "200") {
        return (
            <div className="weatherbox">
                    <div className="city-country-time">
                        <h1 className="font city">{props.weather.name}, {props.weather.sys.country}</h1>
                    <div>

                    <Slider>
                        <div className="slider-box">
                            <h1 className="font date">{currentDate}</h1>
                            <div className="currentweather">
                                <h1 className="info mintemp"><span className="min-font">{fTemp(props.weather.main.temp_min)}</span><br/><span className="high-low">LOW</span></h1>
                                <h1 className="info current-temp"><span className="main-temp">{fTemp(props.weather.main.temp) + '°' + 'f'}</span><br/><span className="condition">{props.weather.weather[0].main}</span></h1>
                                <h1 className="info maxtemp"><span className="max-font">{fTemp(props.weather.main.temp_max)}</span><br/><span className="high-low">HIGH</span></h1>
                            </div>
                        </div>
                        <div className="slider-box">
                            <h1 className="font date">{tomorrowDate}</h1>
                            <div className="currentweather">
                                <h1 className="info mintemp"><span className="min-font">{fTemp(props.weatherforcast.list[5].main.temp_min)}</span><br/><span className="high-low">LOW</span></h1>
                                <h1 className="info current-temp"><span className="main-temp">{fTemp(props.weatherforcast.list[5].main.temp) + '°' + 'f'}</span><br/><span className="condition">{props.weather.weather[0].main}</span></h1>
                                <h1 className="info maxtemp"><span className="max-font">{fTemp(props.weatherforcast.list[5].main.temp_max)}</span><br/><span className="high-low">HIGH</span></h1>
                            </div>
                        </div>
                        <div className="slider-box">
                            <h1 className="font date">{nextDayDate}</h1>
                            <div className="currentweather">
                                <h1 className="info mintemp"><span className="min-font">{fTemp(props.weatherforcast.list[13].main.temp_min)}</span><br/><span className="high-low">LOW</span></h1>
                                <h1 className="info current-temp"><span className="main-temp">{fTemp(props.weatherforcast.list[13].main.temp) + '°' + 'f'}</span><br/><span className="condition">{props.weather.weather[0].main}</span></h1>
                                <h1 className="info maxtemp"><span className="max-font">{fTemp(props.weatherforcast.list[13].main.temp_max)}</span><br/><span className="high-low">HIGH</span></h1>
                            </div>
                        </div>
                        <div className="slider-box">
                            <h1 className="font date">{dayThree}</h1>
                            <div className="currentweather">
                                <h1 className="info mintemp"><span className="min-font">{fTemp(props.weatherforcast.list[21].main.temp_min)}</span><br/><span className="high-low">LOW</span></h1>
                                <h1 className="info current-temp"><span className="main-temp">{fTemp(props.weatherforcast.list[21].main.temp) + '°' + 'f'}</span><br/><span className="condition">{props.weather.weather[0].main}</span></h1>
                                <h1 className="info maxtemp"><span className="max-font">{fTemp(props.weatherforcast.list[21].main.temp_max)}</span><br/><span className="high-low">HIGH</span></h1>
                            </div>
                        </div>
                        <div className="slider-box">
                            <h1 className="font date">{dayFour}</h1>
                            <div className="currentweather">
                                <h1 className="info mintemp"><span className="min-font">{fTemp(props.weatherforcast.list[29].main.temp_min)}</span><br/><span className="high-low">LOW</span></h1>
                                <h1 className="info current-temp"><span className="main-temp">{fTemp(props.weatherforcast.list[29].main.temp) + '°' + 'f'}</span><br/><span className="condition">{props.weather.weather[0].main}</span></h1>
                                <h1 className="info maxtemp"><span className="max-font">{fTemp(props.weatherforcast.list[29].main.temp_max)}</span><br/><span className="high-low">HIGH</span></h1>
                            </div>
                        </div>
                        <div className="slider-box">
                            <h1 className="font date">{dayFive}</h1>
                            <div className="currentweather">
                                <h1 className="info mintemp"><span className="min-font">{fTemp(props.weatherforcast.list[37].main.temp_min)}</span><br/><span className="high-low">LOW</span></h1>
                                <h1 className="info current-temp"><span className="main-temp">{fTemp(props.weatherforcast.list[37].main.temp) + '°' + 'f'}</span><br/><span className="condition">{props.weather.weather[0].main}</span></h1>
                                <h1 className="info maxtemp"><span className="max-font">{fTemp(props.weatherforcast.list[37].main.temp_max)}</span><br/><span className="high-low">HIGH</span></h1>
                            </div>
                        </div>
                        </Slider>
                        <h1 className="swipe-info">SWIPE/DRAG WEATHER LEFT OR RIGHT TO VIEW FORCAST</h1>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                {console.log("NO DATA")}
            </div>
        )
    }

}