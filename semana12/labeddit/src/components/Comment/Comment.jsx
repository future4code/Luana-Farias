import styles from './styles.module.scss'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { convertTime } from '../../utils/convertDate';


const Comment = (props) => {

    const { postDetail, vote, userVoteDirection } = props

    const renderComments = postDetail && postDetail.comments && postDetail.comments.map((post => {
        return (
        <section key={post.id} className={styles.comment}>
        <h3>{post.username}</h3>
        <p>{post.text}</p>
        <p>{convertTime(post.createdAt)}</p>
    
    <div className={styles.buttonsContainer}>
        <button onClick={() => vote(1)}><ExpandLessIcon/></button>
        <button onClick={() => vote(0)}>{userVoteDirection}</button>
        <button onClick={() => vote(-1)}><ExpandMoreIcon/></button>
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


    // <section className={styles.comment}>
    //     <img src="" alt="" />
    //     <h3>@anamaria</h3>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas deleniti placeat. Ullam voluptates eveniet, assumenda qui dignissimos ipsum tenetur nobis, nam libero suscipit, aut quo unde. Deserunt, ab culpa.</p>
    
    // <div className={styles.buttonsContainer}>
    //     <button><ExpandLessIcon/></button>
    //     <span>0</span>
    //     <button><ExpandMoreIcon/></button>
    // </div>
    // </section>