import { useHistory } from 'react-router'
import { goToHome } from '../routes/cordinator'


export const LoginPage = () => {
    const history = useHistory();
    return (
        <>
            <h1>Login Page</h1>
            <button onClick={() => goToHome(history)}>Voltar para home</button>
        </>
    )
}

