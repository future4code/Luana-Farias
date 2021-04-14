import * as api from '../api/api'
import { useEffect } from 'react'
import axios from 'axios'

export const ListTripsPage = () => {


    useEffect(() => {
        console.log(api.trips().then(console.log))
    }, [])

    // const getTrips = () => {
    //     api.trips().then((res) => {
    //     console.log(res)
    //     })
    // }

    // const teste = () => {
    //     axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/luana-cruz/trips')
    //     .then((r) => {
    //         console.log(r.data)
    //     })   
    // }
    
    return (
        <>
        <h1>ListTripsPage</h1>
        {/* <button onClick={teste}>Pegar viagens</button> */}
        </>
    )
}
