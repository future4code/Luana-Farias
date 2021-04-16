import * as api from '../api/api'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'


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

    const renderTripList = tripList.map(item => {
        return (
            <div key={item.id}>
            <Link to={`/admin/trips/${item.id}`}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.planet}</p>
            <p>{item.durationInDays}</p>
            <p>{item.date}</p>
            </Link>
            </div>
        )
    })
    
    return (
        <>
        <h1>{tripList ? renderTripList : "carregando..." }</h1>
        <button onClick={getTrips}>Pegar viagens</button>
        <button onClick={() => history.goBack()}>voltar</button>
        </>
    )
}
