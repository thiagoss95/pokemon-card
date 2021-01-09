import React from 'react'
import Card from './Card'
import './Main.css'

const Main = props =>
    <div className="Main">
        <Card pokemon={props.pokemon}/>
    </div>

export default Main