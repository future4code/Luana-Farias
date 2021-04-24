
const TripDetail = (props) => {

     const tripDetail = props.tripDetail
     const approveCandidate = props.approveCandidate
     const id = props.id
     const token = props.token

     const renderCandidates = tripDetail && tripDetail.candidates && tripDetail.candidates.map((person) => {
        return (
            <div key={person.id}>
                <hr/>
            <p>{person.name}</p>
            <p>{person.age}</p>
            <p>{person.country}</p>
            <p>{person.profession}</p>
            <p>{person.applicationText}</p>
            <button onClick={() => approveCandidate(person.id, true, id, token)}>Aprovar</button>
            <button>Recusar</button>
            </div>
        )
    })

    const renderApproved = tripDetail.approved && tripDetail.approved.map((candidate) => {
        return (
            <section key={candidate.id}>
            <p>Candidato: {candidate.name}</p>
            <p>País: {candidate.country}</p>
            <p>Profissão: {candidate.profession}</p>
            <p>Mensagem: {candidate.applicationText}</p>
            <hr/>
            </section>
        )
    })

    return (
        <section>
            <h1>{tripDetail.name}</h1>
            <p>Data: {tripDetail.date}</p>
            <p>{tripDetail.description}</p>
            <p>Duração em dias: {tripDetail.durationInDays}</p>
            <p>Planeta: {tripDetail.planet}</p>
           
            <h2>Candidatos aguardando aprovação</h2>
            {renderCandidates} 

            <hr/>
            {tripDetail.approved && <h2>Aprovados:</h2>} 
            {tripDetail.approved && renderApproved}
        </section>
    )
}

export default TripDetail