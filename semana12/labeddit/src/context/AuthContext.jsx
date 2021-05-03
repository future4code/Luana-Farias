import { useContext } from "react";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { GlobalStateContext } from "../global/GlobalStateContext";
import { api } from "../services/api";
import { projectName } from '../constants/projectName'

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {

    const { setters } = useContext(GlobalStateContext);

    const [isAuth, setIsAuth] = useState(false);

    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem(`${projectName}.token`)
         if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`
            setIsAuth(true)
        }
    },[])

    const login = (body) => {
        setters.setIsLoading(true)
        api.post('login',
        body)
        .then(res => {
            window.localStorage.setItem(`${projectName}.token`, res.data.token)
            api.defaults.headers.Authorization = `Bearer ${res.data.token}`
            setIsAuth(true)
            setters.setIsLoading(false)
            history.push("/")
        })
        .catch(e => console.log(e))
    } 

    const logout = () => {
        window.localStorage.removeItem(`${projectName}.token`)
        setIsAuth(false)
        api.defaults.headers.Authorization = undefined
        history.push('/login')
    }

    const states = { isAuth }
    const requests = { login, logout }

    return (
        <AuthContext.Provider value={{ states, requests }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;