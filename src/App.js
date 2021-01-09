import React, { useState, useEffect } from 'react'
import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import axios from 'axios'
import Button from './components/Button'

function App() {

  const [pokemon, setPokemon] = useState([])
  const [pokemonId, setPokemonId] = useState(1)

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => setPokemon(response.data))
      .catch(error => console.error("Ocorreu um erro:", error))
  }, [pokemonId])

  function handleChangePokemon() {
    const newId = Math.floor(Math.random() * (150)) + 1
    setPokemonId(newId)
  }

  return (
    <div className="App">
      <Header />
      <Main pokemon={pokemon}/>
      <Button handleChangePokemon={() => handleChangePokemon()}/>
    </div>
  );
}

export default App;