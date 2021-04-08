import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PokeCard(props) {

    const [pokemonEscolhido, setPokemonEscolhido] = useState({})

    useEffect(() => {
        getOnlyOnePokemon(props.pokemons);
    }, [pokemonEscolhido])

    const getOnlyOnePokemon = async (poke) => {
        try{
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
            setPokemonEscolhido(res.data)
        } catch(err) {
            console.log(err)
        }
    }

 


    return (
      <>
        <h3>{pokemonEscolhido.name}</h3>
        {pokemonEscolhido.types && <p>{pokemonEscolhido.types[0].type.name}</p>}
        {pokemonEscolhido.sprites && ( <img src={pokemonEscolhido.sprites.front_default}/> ) }
      </>
    );
  }
  
  export default PokeCard;