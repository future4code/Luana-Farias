import styles from './styles.module.scss'
import useInput from '../../hooks/useInput';

const SignIn = () => {

    const [email, handleEmail] = useInput();
    const [password, handlePassword] = useInput();
    const [username, handleUsername] = useInput();

    return (
        <body>
        <section className={styles.formContainer}>
            <h2>Faça seu cadastro</h2>
            <input type="text" name="username" value={username} onChange={handleUsername} placeholder="Nome de usuário"/>
            <input type="email" name="email" value={email} onChange={handleEmail} placeholder="E-mail"/>
            <input type="password" name="password" value={password} onChange={handlePassword} placeholder="Senha"/>
            <button>Cadastrar</button>
        </section>
        </body>
    )
}

export default SignIn;