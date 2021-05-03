import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../Button/Button'
import styles from './styles.module.scss'
import { AuthContext } from '../../context/AuthContext'
import { goToSignUp } from '../../router/cordinator';


const Header = () => {   
    const { states: {isAuth}, requests:{logout}} = useContext(AuthContext)

    const history = useHistory();

    return (
        <div className={styles.headerContainer}>
            <Link to="/">
            <h1>Labeddit</h1>
            </Link>
              
            <Button
                buttonText={isAuth ? "Logout" : "Cadastre-se"}
                onClickButton={isAuth ? logout : () => goToSignUp(history) }
                />    
        </div>
    );
};

export default Header;