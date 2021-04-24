import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import TripDetail from '../components/TripDetail/TripDetail'
  

export const TripDetailsPage = () => {

    const [tripDetail, setTripDetail] = useState([]);
    const history = useHistory();
    const { id } = useParams();
    const token = window.localStorage.getItem("token")

    useEffect(() => {
        getTripDetail(id,token)
    }, [tripDetail])
    

      const getTripDetail = (id, token) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/luana-cruz/trip/${id}`, 
        {
            headers: {
                auth: token
            }
        })
        .then(r => setTripDetail(r.data.trip))
        .catch(e => console.log(e.response))
      }


      const approveCandidate = (candidateId, decide, id, token) => {

          const body = {
            "approve": decide
        }

          axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/luana-cruz/trips/${id}/candidates/${candidateId}/decide`, 
          body,
          {
              headers: {
                  'Content-Type' : 'application/json',
                  auth : token
              }
          })
      }


    return (
        <>
        <button onClick={() => history.goBack()}>voltar</button>

        <Link to={'/trips/application'}>
            <button>Aplicar</button>
        </Link>
        <hr/>
        <TripDetail 
            tripDetail={tripDetail}
            id={id}
            token={token}
            approveCandidate={approveCandidate} />

        </>
    )
}
