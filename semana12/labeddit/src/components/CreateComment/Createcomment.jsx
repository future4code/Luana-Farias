import styles from './styles.module.scss'
import useInput from '../../hooks/useInput'

const CreateComment = () => {

    const [commentArea, onChangeCommentArea] = useInput();

    return (
        <form className={styles.createCommentContainer}>
        <h3>Deixe seu comentário</h3>
        <textarea value={commentArea} onChange={onChangeCommentArea} placeholder="Digite seu comentário..."/>
        <button>Comentar</button>
        </form>
    )
}

export default CreateComment;