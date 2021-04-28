import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Comment from '../components/Comment/Comment'
import CreateComment from '../components/CreateComment/Createcomment'
import PostCard from '../components/PostCard/PostCard'
import { api } from '../services/api'
import useInput from '../hooks/useInput'


export const PostPage = () => {

    const { id } = useParams();
    const token = window.localStorage.getItem("token");
    const [postDetail, setPostDetail] = useState([]);
    const [commentArea, handleCommentArea] = useInput();

    useEffect(() => {
        getPostDetail(id)
    },[])

    const getPostDetail = (id) => {
        const res =  api.get(`/posts/${id}`,
        {
            headers: {
                Authorization: token
            }
        })
        .then(r => {
            setPostDetail(r.data.post)
            console.log(postDetail)
        })
        .catch(e => console.log(e.response))
    }

    const createComment = (id, token, body) => {
        api.post(`/posts/${id}/comment`, 
        body,
        {
            headers: {
                'Content-Type':'application/json',
                Authorization: token
            }
        })
        .then(r => {
            console.log(r.data)
        })
        .catch(e => console.log(e.response))
    }


    const onSubmitForm = (e) => {
        console.log(commentArea)
        e.preventDefault();

        const body = {
            text: commentArea
        }

        createComment(id, token, body)

    }

    return (
        <section>
        {postDetail ? (
            <>
            <PostCard 
            key={postDetail.id}   
            id={postDetail.id}
            title={postDetail.title}
            text={postDetail.text}
            username={postDetail.username}
            userVoteDirection={postDetail.userVoteDirection}
            votesCount={postDetail.votesCount}
            commentsCount={postDetail.commentsCount}
            createdAt={postDetail.createdAt}/>
        <CreateComment
            onSubmitForm={onSubmitForm}
            commentArea={commentArea}
            handleCommentArea={handleCommentArea}
            />
            </>
        ) : (
            "carregando"
        )}


        <h3>Comentários:</h3>
        <Comment postDetail={postDetail}
                    />
        </section>
    )
}