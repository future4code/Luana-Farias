import styles from './styles.module.scss'
import useInput from '../../hooks/useInput'

const CreatePost = () => {

    const [textArea, onChangeTextarea] = useInput();

    return (
        <form className={styles.createPostContainer}>
        <textarea value={textArea} onChange={onChangeTextarea} placeholder="O que estou pensando hoje?"/>
        <button>Postar</button>
        </form>
    )
}

export default CreatePost;