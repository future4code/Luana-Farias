import SignIn from '../components/SignIn/SignIn'
import useInput from '../hooks/useInput';
import { api } from '../services/api';

export const SignInPage = () => {

    const [email, handleEmail] = useInput();
    const [password, handlePassword] = useInput();
    const [username, handleUsername] = useInput();

    const onSubmitForm = (e) => {
        e.preventDefault();

        const body = {
            email,
            password,
            username
        }
        signUp(body)
    }

    const signUp = async (body) => {
        const res = await api.post('signup',
        body,
         {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((res) => console.log(res.data))
        .catch(e => console.log(e.response))
    }

    return (
        <>
        <SignIn email={email}
                handleEmail={handleEmail}
                password={password}
                handlePassword={handlePassword}
                username={username}
                handleUsername={handleUsername}
                onSubmitForm={onSubmitForm}
                />
        </>
    )
}