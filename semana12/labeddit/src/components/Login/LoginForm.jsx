import styles from './styles.module.scss'

const LoginForm = (props) => {

    const { email, handleEmail, password, handlePassword, onSubmitForm } = props

    return ( 
        <form onSubmit={onSubmitForm} className={styles.formContainer}>
            <h2>Faça o login ou <button>cadastre-se</button></h2>
            <input type="email" name="email" value={email} onChange={handleEmail} placeholder="E-mail"/>
            <input type="password" name="password" value={password} onChange={handlePassword} placeholder="Senha"/>
            <button>Entrar</button>
        </form>
    )
}

export default LoginForm;