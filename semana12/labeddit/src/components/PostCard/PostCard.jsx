import styles from './styles.module.scss'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';


const PostCard = (props) => {

    const {commentsCount, createdAt, id, text, title, username } = props

    return (
        <section key={id} className={styles.postContainer}>
            <h2>{username}</h2>
            <Link to={`/post/${id}`}>
            <p>{text}</p>
            </Link>
        
        <div className={styles.buttonsContainer}>
            <button><ExpandLessIcon/></button>
            <span>0</span>
            <button><ExpandMoreIcon/></button>

            <p>{commentsCount}</p>
        </div>
        </section>
    )
}

export default PostCard;