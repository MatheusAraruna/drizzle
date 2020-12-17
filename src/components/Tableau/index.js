import React, { useContext } from 'react';
import { Context } from '../../context/DataContext'
import Card from '../../elements/Card'
import { FaMapMarkerAlt } from 'react-icons/fa'
import'./styles.scss'

function Tableau() {
    const { wheater } = useContext(Context);
    function returnAvarage(low,high){
        return Math.round((low+high)/2);
    }
    return (
        <div className="tableau">   
            <div className="main-data">
                <div className="temperature">
                    <h1>
                    {wheater.current_observation.condition.temperature}º
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
                    <span>
                        {wheater.current_observation.condition.text}
                    </span>
                </div>
            </div>
            <div className="sub-data">
                <div className="forecasts">
                    {wheater.forecasts.map((item,i)=>{
                        return <Card 
                                key={i} 
                                day={item.day}
                                condition={item.code}
                                temperature={returnAvarage(item.low,item.high)}
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