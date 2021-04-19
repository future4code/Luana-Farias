import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { login } from '../routes/cordinator'


export const Homepage = () => {
    
    return (
        <>
        <h1>Home</h1>
        <Link to={'/trips/list'}>
            <button>spacetrips</button>
        </Link>

        <Link to={'/login'}>
            <button>Login</button>
        </Link>
        
        </>
    )
}
