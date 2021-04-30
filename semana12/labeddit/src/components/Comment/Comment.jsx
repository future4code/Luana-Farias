import styles from './styles.module.scss'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { convertTime } from '../../utils/convertDate';


const Comment = (props) => {


    const { postDetails, makeVoteComment, id } = props

    const renderComments = postDetails && postDetails.comments && postDetails.comments.map((post => {
        return (
        <section key={post.id} className={styles.comment}>
        <h3>{post.username}</h3>
        <p>{post.text}</p>
        <p>{convertTime(post.createdAt).toString()}</p>
          
        <div className={styles.buttonsContainer}>
            <button onClick={() => makeVoteComment(1,id, post.id)}><ExpandLessIcon/></button>
             <button onClick={() => makeVoteComment(0,id, post.id)}>{post.votesCount}</button>
            <button onClick={() => makeVoteComment(-1,id, post.id)}><ExpandMoreIcon/></button>
         </div>
        </section>
        )
    }))

    return (
        <>
       <h3>Comentários:</h3>
        {renderComments}
        </>

    )
}

export default Comment;


