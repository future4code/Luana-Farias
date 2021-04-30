import styles from './styles.module.scss'

export const Button = (props) => {

    const { buttonText, onClickButton } = props
    

    return (  
        <button onClick={onClickButton} className={styles.buttonPrimary}>{buttonText}</button>
    )
}

export const ButtonSecondary = (props) => {

    const { buttonText, onClickButton } = props
    

    return (  
        <button onClick={onClickButton} className={styles.buttonSecondary}>{buttonText}</button>
    )
}