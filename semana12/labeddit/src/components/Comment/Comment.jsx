import styles from './styles.module.scss'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Comment = (props) => {

    const { postDetail } = props

    console.log(postDetail)

    const renderComments = postDetail && postDetail.comments && postDetail.comments.map((post => {
        return (
        <section key={post.id} className={styles.comment}>
        <h3>{post.username}</h3>
        <p>{post.text}</p>
        <p>Há {post.createdAt}</p>
    
    <div className={styles.buttonsContainer}>
        <button><ExpandLessIcon/></button>
        <span>{post.userVoteDirection}</span>
        <button><ExpandMoreIcon/></button>
    </div>
    </section>
        )
    }))

    return (
        <>
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