import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'
import Logo from '../assets/foguete1.svg'
import "./Header.css"
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

function Header ({backButton}){

    return (
        <div className="header">
            {!backButton ? (
                <IconButton>
                    <Link to="/">
                <ArrowBackIosIcon className="header__icon" fontSize="large" />
                    </Link>
                </IconButton>
            )
            :
            (
            <IconButton>
            <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
            )}

            
            <IconButton>
                <Link to="/">
                <a><img className="header__logo" alt="AstroMatch Logo" src={Logo}/></a>
                </Link>
            </IconButton>

            <IconButton>
                <Link to="/chat">
                <a><ForumIcon className="header__icon" fontSize="large"/></a>
                </Link>
            </IconButton>
        </div>
    )
}

export default Header;