import styles from './styles.module.scss'
import useInput from '../../hooks/useInput'
import { ButtonSecondary } from '../Button/Button'

const CreatePost = (props) => {

    // const [textArea, onChangeTextarea] = useInput();
    // const [titleArea, onChangeTitlearea] = useInput();
    const { titleArea, onChangeTitleArea, textArea, onChangeTextArea, onSubmitPost } = props

    return (
        <form onSubmit={onSubmitPost} className={styles.createPostContainer}>
        <input type="text" placeholder="Título" value={titleArea} onChange={onChangeTitleArea} />
        <textarea value={textArea} onChange={onChangeTextArea} placeholder="O que estou pensando hoje?"/>
        {/* <button onClick={onSubmitPost}>Postar</button> */}
        <ButtonSecondary onClickButton={onSubmitPost} buttonText={"Postar"}/>
        </form>
    )
}

export default CreatePost;