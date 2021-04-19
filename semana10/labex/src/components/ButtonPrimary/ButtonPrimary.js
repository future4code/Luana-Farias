import { PinDropSharp } from '@material-ui/icons';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import styled from 'styled-components'

export const BtnPrimary = styled.button`
    background-color: #D61D56;
    color: white;
    border-radius: 20px;
    padding: 2%;
    width: 90px;
`

const BtnDelete = styled.button`
    padding: 3%;
    background-color: transparent;
    color: #D61D56;
    font-size: 1.5em;
    border: none;
    margin-left: 20%;
    cursor: pointer;
`


export const ButtonPrimary = (props) => <BtnPrimary>{props.text}</BtnPrimary>

export const ButtonSecondary = (props) => <button>{props.text}</button>

export const ButtonDelete = (props) => <BtnDelete onClick={props.onClickBtn}>{props.text}</BtnDelete>

export const ButtonDetails = (props) => <button>{props.text}</button>