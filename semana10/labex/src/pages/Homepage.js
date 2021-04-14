import { useHistory } from 'react-router'
import { login } from '../routes/cordinator'


export const Homepage = () => {
    const history = useHistory();
    
    return (
        <>
        <h1>Home</h1>
        <button onClick={() => login(history)}>Ir para página de login</button>
        </>
    )
}
