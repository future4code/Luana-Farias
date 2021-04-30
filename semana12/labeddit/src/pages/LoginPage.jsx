import LoginForm from "../components/Login/LoginForm"
import useInput from '../hooks/useInput';
import { goToFeed } from "../router/cordinator";
import { api } from '../services/api'
import { useHistory } from "react-router"
import Header from "../components/Header/Header";
import { token } from '../utils/token'
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalStateContext } from "../global/GlobalStateContext";
import { HistoryOutlined } from "@material-ui/icons";

export const LoginPage = () => {

    const [email, handleEmail] = useInput();
    const [password, handlePassword] = useInput();
    const history = useHistory();

    const { states, setters } = useContext(GlobalStateContext);


    useEffect(()=> {
        if(token) {
        history.push('/')
        }
    },[token])


    const login = (body) => {
        setters.setIsLoading(true)
        const res = api.post('login',
        body,
        {
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => {
            setters.setIsLoading(false)
            window.localStorage.setItem('token', res.data.token)
            history.push("/")
            // goToFeed()
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
        history.push('/')
        // goToFeed(history)
    }


    return (
        <>
        <Header />
        <div className="pageContainers">
        <LoginForm
            email={email}
            handleEmail={handleEmail}
            password={password}
            handlePassword={handlePassword}
            onSubmitForm={onSubmitForm}
            />
        </div>
        </>
    )
}