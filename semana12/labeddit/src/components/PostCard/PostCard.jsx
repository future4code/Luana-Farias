import styles from './styles.module.scss'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { GlobalStateContext } from "../../global/GlobalStateContext"
import { useContext, useEffect, useState } from 'react'
import { convertTime } from '../../utils/convertDate'


const PostCard = (props) => {

    const {commentsCount, createdAt, id, text, title, username, votesCount} = props

    const { requests } = useContext(GlobalStateContext);


    return (
        <section key={id} className={styles.postContainer}>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>
            <p>{text}</p>
            </Link>
            <p>postado por <strong>{username}</strong> {convertTime(createdAt).toString()} </p>
        
        <div className={styles.buttonsContainer}>
            <button onClick={() => requests.votePost(1,id)}><ExpandLessIcon/></button>
            <button onClick={() => requests.votePost(0,id)}>{votesCount}</button>
            <button onClick={() => requests.votePost(-1,id)}><ExpandMoreIcon/></button>

            <p>{commentsCount && commentsCount > 1 ? `${commentsCount} comentários` : `${commentsCount} comentário`}</p>
        </div>
        </section>
    )
}

export default PostCard;