import Header from '../components/Header'
import Match from '../components/Match'
import * as api from '../api/api'
import { useState, useEffect } from 'react'


function Chat (){

    const [match, setMatch] = useState([])

    //pega os matches
   const getMatches = () => {
      api.getMatches().then(r => {
          setMatch(r.matches)
          console.log(r.matches)
       })
   }
  
      useEffect(() => {
          getMatches();
      },[])


        //limpa matches
        const cleanMatches = () => {
            api.clear().then(r => {
              console.log(r)
              getMatches()
            })
          }

    return (
        <>
        <Header/>
        <Match cleanMatches={cleanMatches}
                getMatches={getMatches}
                match={match}/>
        </>
    )
}

export default Chat;