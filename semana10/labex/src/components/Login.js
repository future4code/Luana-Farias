

const Login = (props) => {

    // const [onChange, value, name, handleClick] = props

    return (
        <>
        <form onSubmit={props.handleClick}>
        <input required onChange={props.onChange} value={props.valueEmail} name="email" placeholder="E-mail" type="email" />
        <input required onChange={props.onChange} value={props.valuePass} name="password" placeholder="Senha" type="password" />
        <button onClick={props.onClick}>Login</button>
        </form>
        </>
    );
};

export default Login;