import { Link } from 'react-router-dom'


const AdminHome = (props) => {

    const tripList = props.tripList
    const deleteTrip = props.deleteTrip

    const token = window.localStorage.getItem("token")

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
        {tripList ? renderTripList : "carregando..." }
        </>
    )
}

export default AdminHome;