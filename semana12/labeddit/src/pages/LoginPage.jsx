import LoginForm from "../components/Login/LoginForm"
import useInput from '../hooks/useInput';
import { goToFeed } from "../router/cordinator";
import { api } from '../services/api'
import { useHistory } from "react-router"

export const LoginPage = () => {

    const [email, handleEmail] = useInput();
    const [password, handlePassword] = useInput();
    const history = useHistory();


    const login = (body) => {
        const res = api.post('login',
        body,
        {
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => {
            window.localStorage.setItem('token', res.data.token)
            goToFeed(history)
        })
        .catch(e => console.log(e.response))
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        const body = {
            email,
            password
        }
        login(body)
    }


    return (
        <div className="pageContainers">
        <LoginForm
            email={email}
            handleEmail={handleEmail}
            password={password}
            handlePassword={handlePassword}
            onSubmitForm={onSubmitForm}
            />
        </div>
    )
}