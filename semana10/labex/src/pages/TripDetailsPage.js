import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
  


export const TripDetailsPage = () => {

    const [tripDetail, setTripDetail] = useState([]);

    useEffect(() => {
        getTripDetail(id,token)
    }, [])

      let { id } = useParams();
      const token = window.localStorage.getItem("token")
    

      const getTripDetail = (id, token) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/luana-cruz/trip/${id}`, 
        {
            headers: {
                auth: token
            }
        })
        .then(r => {
            setTripDetail(r.data.trip)
            console.log(tripDetail)
        })
        .catch(e => console.log(e.response))
      }

    return (
        <>
            <h1>TripDetailsPage</h1>
            <h1>{tripDetail.name}</h1>
            <p>Data: {tripDetail.date}</p>
            <p>{tripDetail.description}</p>
            <p>Duração em dias: {tripDetail.durationInDays}</p>
            <p>Planeta: {tripDetail.planet}</p>
            {/* {tripDetail.candidates.map {name: "João Golias", age: 22, country: "Havaí", profession: "Surfista Profissional", applicationText: "Adoro} */}
            <button onClick={() => getTripDetail(id,token)}>pegar</button>

        </>
    )
}
