
const TripDetail = (props) => {

     const tripDetail = props.tripDetail

     const renderCandidates = tripDetail && tripDetail.candidates && tripDetail.candidates.map((person) => {
        return (
            <div key={person.id}>
            <p>{person.name}</p>
            <p>{person.age}</p>
            <p>{person.country}</p>
            <p>{person.profession}</p>
            <p>{person.applicationText}</p>
            </div>
        )
    })

    return (
        <section>
            <h1>{tripDetail.name}</h1>
            <p>Data: {tripDetail.date}</p>
            <p>{tripDetail.description}</p>
            <p>Duração em dias: {tripDetail.durationInDays}</p>
            <p>Planeta: {tripDetail.planet}</p>
            {renderCandidates}     
        </section>
    )
}

export default TripDetail