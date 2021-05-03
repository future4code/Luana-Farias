import { useContext } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header/Header';
import SignIn from '../components/SignIn/SignIn'
import { AuthContext } from '../context/AuthContext';
import useInput from '../hooks/useInput';
import { api } from '../services/api';


export const SignInPage = () => {

    const { states: {isAuth} } = useContext(AuthContext)
    const [email, handleEmail] = useInput();
    const [password, handlePassword] = useInput();
    const [username, handleUsername] = useInput();
    const history = useHistory();

    useEffect(() => {
        if(isAuth) {
            history.push("/")
        }
    },[])

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
        body)
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