import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button'
import styles from './styles.module.scss'


const Header = () => {

    const [buttonState, setButtonState] = useState("Cadastrar");
    const token = window.localStorage.getItem("token")
    const history = useHistory();

    useEffect(() => {
        if(token){
            setButtonState("Logout")
        }
    },[])

    const logOut = () => {
        if(buttonState === "Logout") {
            window.localStorage.removeItem('token')
        } else {
            history.push('/signin')
        }
    }

   

    return (
        <div className={styles.headerContainer}>
            <Link to="/">
            <h1>Labeddit</h1>
            </Link>
           
            
            <Button
                buttonText={buttonState}
                onClickButton={logOut}
                />
            
        </div>
    )
}

export default Header;