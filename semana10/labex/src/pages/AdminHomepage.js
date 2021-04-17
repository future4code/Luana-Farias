import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AdminHome from '../components/AdminHome/AdminHome'


export const AdminHomepage = () => {

    const [tripList, setTripList] = useState([])

    // const token = window.localStorage.getItem("token")

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

    
    return (
        <>
        <h3>Admin Home</h3>

        <AdminHome 
                    tripList={tripList}
                    deleteTrip={deleteTrip}
                    />
                    

        <Link to={'/admin/trips/create'}>
                <button>Criar Viagem</button>
        </Link>

        <button>Logout</button>
        
        </>
    )
}

