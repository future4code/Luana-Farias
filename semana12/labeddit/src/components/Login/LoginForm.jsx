
import useInput from '../../hooks/useInput';
import styles from './styles.module.scss'

const LoginForm = () => {

    const [email, handleEmail] = useInput();
    const [password, handlePassword] = useInput();

    console.table(email)

    return (
        <body>
        <section className={styles.formContainer}>
            <h2>Faça o login ou <button>cadastre-se</button></h2>
            <input type="email" name="email" value={email} onChange={handleEmail} placeholder="E-mail"/>
            <input type="password" name="password" value={password} onChange={handlePassword} placeholder="Senha"/>
            <button>Entrar</button>
        </section>
        </body>
    )
}

export default LoginForm;