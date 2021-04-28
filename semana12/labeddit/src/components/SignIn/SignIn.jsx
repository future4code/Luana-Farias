import styles from './styles.module.scss'

const SignIn = (props) => {

    const {email, handleEmail, password, handlePassword, username, handleUsername, onSubmitForm} = props


    return (
        <body>
        <form onSubmit={onSubmitForm} className={styles.formContainer}>
            <h2>Faça seu cadastro</h2>
            <input type="text" name="username" value={username} onChange={handleUsername} placeholder="Nome de usuário"/>
            <input type="email" name="email" value={email} onChange={handleEmail} placeholder="E-mail"/>
            <input type="password" name="password" value={password} onChange={handlePassword} placeholder="Senha"/>
            <button>Cadastrar</button>
        </form>
        </body>
    )
}

export default SignIn;