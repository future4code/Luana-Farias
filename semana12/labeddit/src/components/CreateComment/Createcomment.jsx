import styles from './styles.module.scss'
import useInput from '../../hooks/useInput'

const CreateComment = (props) => {

    // const [commentArea, onChangeCommentArea] = useInput();
    const { commentArea, handleCommentArea, onSubmitForm } = props

  

    return (
        <form onSubmit={onSubmitForm} className={styles.createCommentContainer}>
        <h3>Deixe seu comentário</h3>
        <textarea value={commentArea} onChange={handleCommentArea} placeholder="Digite seu comentário..."/>
        <button>Comentar</button>
        </form>
    )
}

export default CreateComment;