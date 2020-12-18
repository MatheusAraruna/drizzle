import React, { useContext } from 'react';
import { Context } from '../../context/DataContext'
import { FaMapMarkerAlt } from 'react-icons/fa'

import parseToCelcius from '../../utils/parseToCelcius'
import returnAverage from '../../utils/returnAverage'

import Card from '../../elements/Card'

import'./styles.scss'

function Tableau() {
    const { wheater } = useContext(Context);
    return (
        <div className="tableau">   
            <div className="main-data">
                <div className="temperature">
                    <h1>
                    {parseToCelcius(wheater.current_observation.condition.temperature)}º
                    </h1>
                </div>
                <div className="condition">
                    <p>
                        <FaMapMarkerAlt />
                        {wheater.location.city}
                        -
                        {wheater.location.region}
                        -
                        {wheater.location.country}    
                    </p>
                    <h2>
                        {wheater.current_observation.condition.text}
                    </h2>
                </div>
            </div>
            <div className="sub-data">
                <div className="forecasts">
                    {wheater.forecasts.map((item,i)=>{
                        return <Card 
                                key={i} 
                                day={item.day}
                                condition={item.code}
                                temperature={parseToCelcius(returnAverage(item.low,item.high))}
                                />
                    })}
                </div>
                <div className="observations">
                    <div>
                        <span>Wind</span>
                        <p>{wheater.current_observation.wind.speed}km/h</p>
                    </div>
                    <div>
                        <span>Visibility</span>
                        <p>{wheater.current_observation.atmosphere.visibility}%</p>
                    </div>
                    <div>
                        <span>Humidity</span>
                        <p>{wheater.current_observation.atmosphere.humidity}%</p>
                    </div>
                    <div>
                        <span>Pressure</span>
                        <p>{wheater.current_observation.atmosphere.pressure} hPa</p>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Tableau;