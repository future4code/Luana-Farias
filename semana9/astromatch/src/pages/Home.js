import { Link } from "react-router-dom";
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import * as api from '../api/api'
import TinderCards from "../components/TinderCards";
import axios from "axios";


function Home (){

    //guarda as infos da pessoa (getUsers)
    const [person, setPerson] = useState({});
    //guarda as infos do match (choosePerson)
    const [match, setMatch] = useState([])

    useEffect(() => {
        getUsers()
    }, [])


    //pega os users para escolher
    const getUsers = () => {
        api.getUsers().then(r => {
          setPerson(r.profile)
        })
      }

     //pega os matches
    const getMatches = () => {
      api.getMatches().then(r => {
          // console.log(r)
         setMatch(r)
      })
    }

    //dá like ou deslike
    const choosePerson = (id,choice) => {
      const body = {
          id: id, 
          choice: choice
      }
      axios
          .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luana/choose-person", body)
          .then((r) => console.log(r.data))
          getUsers()
  }

    //limpa matches
    const cleanMatches = () => {
      api.clear().then(r => {
        console.log(r)
      })
    }
       
    return (
        <>
        <Header backButton="/"/>
        <TinderCards users={person}/>

        <button onClick={() => choosePerson(person.id,true)}>Like</button>
        <button onClick={() => choosePerson(person.id,false)}>Dislike</button>
        <button onClick={cleanMatches}>limpa matches</button>
        </>
    )
}

export default Home;