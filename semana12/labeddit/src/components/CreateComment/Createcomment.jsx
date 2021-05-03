import styles from './styles.module.scss'
import { ButtonSecondary } from '../Button/Button'

const CreateComment = (props) => {

    const { commentArea, handleCommentArea, onSubmitForm } = props

    return (
        <form onSubmit={onSubmitForm} className={styles.createCommentContainer}>
            <h3>Deixe seu comentário</h3>
            <textarea value={commentArea} onChange={handleCommentArea} placeholder="Digite seu comentário..."/>
            <ButtonSecondary buttonText={"Comentar"}/> 
        </form>
    )
}

export default CreateComment;