import React from 'react';
import './card-list.css';
import {Card} from '../card/card.jsx';


export const CardList = (props) => 
    <div className='card-list'  >
        {props.monsters.map(monster =>
            <Card key={monster.id} monster={monster} random={Math.round(Math.random() * 1000) } />
        

    )}</div>
