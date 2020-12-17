import React from 'react';
import'./styles.scss'
import returnIcon from '../../utils/returnIcon'
import parseToCelcius from '../../utils/parseToCelcius'

function Card({day,condition,temperature}) {
    console.log('condition', condition)
    return (
        <div className="card">
            <span>{day}</span>
            {returnIcon(condition)}
            <span>{parseToCelcius(temperature)}º</span>
        </div>
  );
}

export default Card;