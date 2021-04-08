import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokeCard from './components/PokeCard'

function App() {

  const [pokeList, setPokeList] = useState([])
  const [pokemon, setPokemon] = useState("") //esse state seta o value dos pokemons, no select

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
        setPokeList(res.data.results)
        console.log(res.data.results)
      } catch (err){
        console.log(err)
      }
    }
    getPokemons();
  }, [])

  //essa função pega o value atual e grava na var POKEMON
  const onChangeSelect = (e) => {
    setPokemon(e.target.value)
    console.log(pokemon)
  }
 
  // const pegarPokemons = () => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  //   .then(r => {
  //     console.log(r)
  //   }).catch(e => {
  //     console.log(e)
  //   })
  // }


  return (
    <>
    {/* <button onClick={pegarPokemons}>pegar pokemons</button> */}

        <select onChange={onChangeSelect}> 
          <option value={""}>nenhum</option>
        {pokeList.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}
        </select>

        <PokeCard pokemons={pokemon}/>
        
  </>
  );
}

export default App;
