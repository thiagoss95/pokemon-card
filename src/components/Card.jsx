import React from 'react'
import './Card.css'

const Card = props =>
{
    const type = props.pokemon.length === 0 ? "loading" : props.pokemon.types[0].type.name

    return (
        <div className="Card">
            <div className={`title ${type}`}>
                {props.pokemon.length === 0 ? "Loading..." : props.pokemon.name.toUpperCase()}
            </div>
            <img src={props.pokemon.length === 0 ? "Loading..." : props.pokemon.sprites.other.dream_world.front_default} 
                alt={props.pokemon.name}/>
            <div className={`attributes ${type}`}>
                {props.pokemon.length === 0 ? "loading" : props.pokemon.types[0].type.name.toUpperCase()}
            </div>
        </div>
    )
}
export default Card