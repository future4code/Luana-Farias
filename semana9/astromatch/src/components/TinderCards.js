import Card from '@material-ui/core/Card';
import './TinderCard.css'

function TinderCards (props){
    const {photo, name, age, bio} = props.users

    return (
        <>
        <div className="card__container">
            <section>
            <div style={{backgroundImage: `url(${photo})`}} className="photo__container"></div>
            <h1>{name}</h1>
            </section>

            <section>
            <h3>{age}</h3>
            <p>{bio}</p>
            </section>
        </div> 
        </>
    )
}

export default TinderCards;