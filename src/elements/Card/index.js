import React from 'react';
import returnIcon from '../../utils/returnIcon'
import'./styles.scss'

function Card({day,condition,temperature}) {
    return (
        <div className="card">
            <span>{day}</span>
            {returnIcon(condition)}
            <span>{temperature}º</span>
        </div>
  );
}

export default Card;