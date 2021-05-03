import styles from './styles.module.scss'
import { ButtonSecondary } from '../Button/Button'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { CircularProgress } from '@material-ui/core';

const LoginForm = (props) => {

    const { email, handleEmail, password, handlePassword, onSubmitForm } = props
    const { states, setters } = useContext(GlobalStateContext);

    return ( 
        <form onSubmit={onSubmitForm} className={styles.formContainer}>
            <h2>Faça login ou <Link to="/signin"><span>cadastre-se</span></Link> </h2>
            <input type="email" 
            name="email" value={email} 
            onChange={handleEmail} 
            placeholder="E-mail"
            />

            <input type="password" 
            name="password" value={password} 
            onChange={handlePassword} 
            placeholder="Senha"
            />
            
            {/* <button>Entrar</button> */}
            {states.isLoading ? <CircularProgress/> : <ButtonSecondary buttonText={"Entrar"}/> }   
        </form>
    )
}

export default LoginForm;