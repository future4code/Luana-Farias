import { Link, useHistory } from 'react-router-dom'

const TripList = (props) => {

    const tripList = props.tripList
  

    const renderTripList = tripList.map(item => {
        return (
            <div key={item.id}>
            <Link to={`/admin/trips/${item.id}`}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.planet}</p>
            <p>{item.durationInDays}</p>
            <p>{item.date}</p>
            </Link>
            <hr/>
            </div>
        )
    })

    return (
        <>
        {tripList ? renderTripList : "carregando..." }
        </>
    )
}

export default TripList;