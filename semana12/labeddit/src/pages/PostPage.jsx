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
            getPostDetail(id)
        })
        .catch(e => console.log(e.response))
    }


    const onSubmitForm = (e) => {
        e.preventDefault();

        const body = {
            text: commentArea
        }

        createComment(id, token, body)
    }

    const votePost = (id,body,token) => {
        api.put(`posts/${id}/vote`,
        body,
        {
            headers: {
                'Content-Type' : 'application/json',
                Authorization: token
            }
        })
        .then(r => {
            // getPostDetail(id)
            // getPosts(token)
            console.log(r.data)
        })
        .catch(e => console.log(e.response))
    }

    const vote = (dir) => {
        const body = {
            direction: dir
        }
        votePost(id,body,token) 
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
            createdAt={postDetail.createdAt}
            vote={vote}
     
            />
        <CreateComment
            onSubmitForm={onSubmitForm}
            commentArea={commentArea}
            handleCommentArea={handleCommentArea}
            />
            </>
        ) : (
            "carregando..."
        )}


        
        <Comment postDetail={postDetail}
                vote={vote}
                userVoteDirection={postDetail.userVoteDirection}
                    />
        </section>
    )
}