import styles from './styles.module.scss'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { api } from '../../services/api'


const PostCard = (props) => {

    const {commentsCount, createdAt, id, text, title, username, userVoteDirection, vote } = props
    const token = window.localStorage.getItem("token");


    // const votePost = (id,body,token) => {
    //     api.put(`posts/${id}/vote`,
    //     body,
    //     {
    //         headers: {
    //             'Content-Type' : 'application/json',
    //             Authorization: token
    //         }
    //     })
    //     .then(r => {
    //         getPostDetail(id)
    //         getPosts(token)
    //         console.log(r.data)
    //     })
    //     .catch(e => console.log(e.response))
    // }

    // const vote = (dir) => {
    //     const body = {
    //         direction: dir
    //     }
    //     votePost(id,body,token) 
    // }



    return (
        <section key={id} className={styles.postContainer}>
            <h2>{username}</h2>
            <Link to={`/post/${id}`}>
            <p>{text}</p>
            </Link>
        
        <div className={styles.buttonsContainer}>
            <button onClick={() => vote(1)}><ExpandLessIcon/></button>
            <button onClick={() => vote(0)}>{userVoteDirection}</button>
            <button onClick={() => vote(-1)}><ExpandMoreIcon/></button>

            <p>{commentsCount && commentsCount > 1 ? `${commentsCount} comentários` : `${commentsCount} comentário`}</p>
        </div>
        </section>
    )
}

export default PostCard;