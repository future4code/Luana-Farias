import * as api from '../api/api'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import TripList from '../components/TripList/TripList'


export const ListTripsPage = () => {

    const [tripList, setTripList] = useState([])

    const history = useHistory();

    useEffect(() => {
        getTrips()
        console.log(tripList)
    }, [])

    // const getTrips = () => {
    //     api.trips().then((res) => {
    //         setTripList(res.trips)
    //     console.log(res.trips)
    //     })
    // }

    const getTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/luana-cruz/trips')
        .then(r => setTripList(r.data.trips))
        .catch(err => console.log(err))
    }
    
    return (
        <>
        <TripList 
                tripList={tripList}
                />

        <button onClick={() => history.goBack()}>voltar</button>
        </>
    )
}
