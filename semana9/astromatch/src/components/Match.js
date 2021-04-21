import './Match.css'

function Match(props){

    const match = props.match
    console.log(match)

    const time = new Date()
    const getTime = time.getMinutes()
    console.log(getTime)

    const matchList = match.map(item => {
    return (
        <div className="match__container">
            <div className="match__photo" style={{backgroundImage: `url(${item.photo})`}} />

            <div className="match__name"><h3>{item.name}</h3></div>
            <p></p>
            
        </div>
        
    )});

    return (
        <>
        {match ? matchList : <p>carregando..</p>}
       <button onClick={props.getMatches}>pegar</button>
       <button onClick={props.cleanMatches}>apagar</button>

        </>
    )
}

export default Match;