import React from 'react'
import './Button.css'

const Button = props =>
    <div>
        <button className="Button" onClick={props.handleChangePokemon}>Change Pokemon</button>
    </div>

export default Button