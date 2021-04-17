import { useHistory } from 'react-router-dom'
import { goToBackPage, goToHomeAdmin } from '../routes/cordinator'
import { useForm } from '../hooks/useForm'
import Login from '../components/Login/Login'
import { useEffect } from 'react'
// import * as api from '../api/api'
import axios from 'axios'



export const LoginPage = () => {
    const history = useHistory();
    const [form, onChange, resetForm] = useForm({password: "", email: ""});

    const handleClick = (e) => {
        e.preventDefault();
        resetForm();
    };

    // const login = (body) => {
    //     api.login(body).then(r => {
    //         console.log(r)
    //     })
    // }

    const login = (body) => {
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/luana-cruz/login', body,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        .then(r => {
            window.localStorage.setItem('token', r.data.token)
            goToHomeAdmin(history)
            console.log(r.data)
        })
        .catch(err => {
            console.log(err.response)
        })
    }



    return (
        <>
            <h1>Login Page</h1>
            <Login 
            onChange={onChange} 
            valueEmail={form.email} 
            valuePass={form.password} 
            handleClick={handleClick} 
            onClick={() => login(form)}/>

            {/* <Login 
            onChange={onChange} 
            form={form}  
            handleClick={handleClick} 
            onClick={() => login(form)}/> */}
            <button onClick={() => goToBackPage(history)}>Voltar</button>
        </>
    )
}

