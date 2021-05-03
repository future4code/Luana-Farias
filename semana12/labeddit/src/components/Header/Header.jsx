import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button'
import styles from './styles.module.scss'
import { AuthContext } from '../../context/AuthContext'


const Header = () => {

    
    const { states: {isAuth}, requests:{logout}} = useContext(AuthContext)

    return (
        <div className={styles.headerContainer}>
            <Link to="/">
            <h1>Labeddit</h1>
            </Link>
           
            
            <Button
                buttonText={isAuth ? "Logout" : "Cadastre-se"}
                onClickButton={logout}
                />
            
        </div>
    )
}

export default Header;