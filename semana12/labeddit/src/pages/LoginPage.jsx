import LoginForm from "../components/Login/LoginForm"
import useInput from '../hooks/useInput';
import { goToFeed } from "../router/cordinator";
import { api } from '../services/api'
import { useHistory } from "react-router"
import Header from "../components/Header/Header";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalStateContext } from "../global/GlobalStateContext";
import { HistoryOutlined } from "@material-ui/icons";
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {

    const [email, handleEmail] = useInput();
    const [password, handlePassword] = useInput();

    const { requests: {login}} = useContext(AuthContext)

    const onSubmitForm = (e) => {
        e.preventDefault();

        const body = {
            email,
            password
        }
        login(body)
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