import styles from './styles.module.scss'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const PostCard = () => {

    return (
        <section className={styles.postContainer}>
            <img src="" alt="" />
            <h2>Nome do usuário</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas deleniti placeat. Ullam voluptates eveniet, assumenda qui dignissimos ipsum tenetur nobis, nam libero suscipit, aut quo unde. Deserunt, ab culpa.</p>
        
        <div className={styles.buttonsContainer}>
            <button><ExpandLessIcon/></button>
            <span>0</span>
            <button><ExpandMoreIcon/></button>

            <p>0 comentários</p>
        </div>
        </section>
    )
}

export default PostCard;