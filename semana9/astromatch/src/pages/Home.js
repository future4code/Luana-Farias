import { Link } from "react-router-dom";
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import * as api from '../api/api'
import TinderCards from "../components/TinderCards";
import axios from "axios";


function Home (){

    const [person, setPerson] = useState({});
    const [liked, setLiked] = useState([])
    const [isMatch, setIsMatch] = useState([])

    useEffect(() => {
        getUsers()
        getMatches()
        console.log("é match", isMatch)
    }, [])

    const getUsers = () => {
        api.getUsers().then(r => {
        //   console.log(r.profile)
          setPerson(r.profile)
        })
      }

      

    //  const likePerson = () => {
    //      const newLike = [{...person}]
    //      const newLikedList = [...liked, newLike]
    //      setLiked(newLikedList)
    //      console.log(newLikedList)
    //  }

    
    //  const choosePerson = () => {
    //     const body = {
    //         "id": person.id, 
    //         "choice": true
    //     }
    //      api.choosePerson(body).then(r => {
    //          console.log(r)
    //      })
    //  }

    const choosePerson = (id) => {
        const body = {
            "id": id, 
            "choice": true
        }

        axios
            .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luana/choose-person", body)
            .then((r) => console.log(r.data))
    }
    
      const getMatches = () => {
        api.getMatches().then(r => {
            // const newMatch = [{...r}]
            // const newArrayM = [...isMatch, newMatch]
            // console.log(r)
          setIsMatch(r)
        })
      }

 
    
    return (
        <>
        <Header backButton="/"/>
        <TinderCards users={person}/>



    <button onClick={() => choosePerson(person.id)}>Like</button>
    <button onClick={getMatches}>pegar match</button>
        {/* <button onClick={likePerson}>LIKED</button> */}

        {/* <Link to="/chat">
        <a href="/chat"> Link pro chat</a>
        </Link> */}
        </>
    )
}

export default Home;