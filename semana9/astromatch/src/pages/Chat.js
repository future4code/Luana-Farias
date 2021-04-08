import { Link } from "react-router-dom";
import Header from '../components/Header'


function Chat (){
    return (
        <>
        <Header/>
        <h1>Chat</h1>

        <Link to="/">
        <a href="/"> Link pra Home </a>
        </Link>
        </>
    )
}

export default Chat;