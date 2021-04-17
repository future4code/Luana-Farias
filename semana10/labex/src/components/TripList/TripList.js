import { Link } from 'react-router-dom'

const TripList = (props) => {

    const tripList = props.tripList

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
        </>
    )
}

export default TripList;