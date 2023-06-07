import React from 'react';
import './card.css';

function Card(props) {
    return(
        <div className="card">
            <img src={props.image} alt="profile"/>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Card;