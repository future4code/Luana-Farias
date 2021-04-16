import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const AdminHomepage = () => {

    const [tripList, setTripList] = useState([])

    const token = window.localStorage.getItem("token")

    useEffect(() => {
        getTrips()
    }, [])


    const getTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/luana-cruz/trips')
        .then(r => setTripList(r.data.trips))
        .catch(err => console.log(err))
    }

    const deleteTrip = (id,token) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/luana-cruz/trips/${id}`,
        {
            headers: {
                'Content-Type' : 'application/json',
                auth : token
            }
        })
        .then(r => {
            getTrips()
        })
        .catch(e => console.log(e.response))
    }

    const renderTripList = tripList.map(item => {
        return (
            <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.date}</p>
            <button onClick={() => deleteTrip(item.id,token)}>x</button>
            <Link to={`/admin/trips/${item.id}`}>
                <button>Detalhes</button>
            </Link>
            </div>
        )
    })
    
    return (
        <>
        <h3>Admin Home</h3>
        <Link to={'/admin/trips/create'}>
                <button>Criar Viagem</button>
            </Link>
        <button>Logout</button>
        <h1>{tripList ? renderTripList : "carregando..." }</h1>
        
        </>
    )
}

