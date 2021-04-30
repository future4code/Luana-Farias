import { useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header/Header';
import SignIn from '../components/SignIn/SignIn'
import useInput from '../hooks/useInput';
import { api } from '../services/api';
import { token } from '../utils/token'

export const SignInPage = () => {

    const [email, handleEmail] = useInput();
    const [password, handlePassword] = useInput();
    const [username, handleUsername] = useInput();
    const history = useHistory();

    useEffect(() => {
        if(token) {
            history.push("/")
        }
    },[history])

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
        .then((res) => {
            console.log(res.data)
        })
        .catch(e => console.log(e.response))
    }

    return (
        <>
        <Header/>
        <div className="pageContainers">
        <SignIn email={email}
                handleEmail={handleEmail}
                password={password}
                handlePassword={handlePassword}
                username={username}
                handleUsername={handleUsername}
                onSubmitForm={onSubmitForm}
                />
        </div>
        </>
    )
}