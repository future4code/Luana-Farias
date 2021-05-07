import styles from './styles.module.scss'
import { ButtonSecondary } from '../Button/Button'

const CreatePost = (props) => {
    const { titleArea, onChangeTitleArea, textArea, onChangeTextArea, onSubmitPost } = props

    return (
        <form onSubmit={onSubmitPost} className={styles.createPostContainer}>
        <input type="text" placeholder="Título" value={titleArea} onChange={onChangeTitleArea} />
        <textarea value={textArea} onChange={onChangeTextArea} placeholder="O que estou pensando hoje?"/>
        <ButtonSecondary onClickButton={onSubmitPost} buttonText={"Postar"}/>
        </form>
    );
}

export default CreatePost;