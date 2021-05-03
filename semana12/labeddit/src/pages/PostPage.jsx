import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Comment from '../components/Comment/Comment'
import CreateComment from '../components/CreateComment/Createcomment'
import PostCard from '../components/PostCard/PostCard'
import { api } from '../services/api'
import useInput from '../hooks/useInput'
import { GlobalStateContext } from '../global/GlobalStateContext'
import Header from '../components/Header/Header'


export const PostPage = () => {

    const { id } = useParams();
    const [commentArea, handleCommentArea] = useInput();
  

    const { states, setters, requests } = useContext(GlobalStateContext);


    useEffect(() => {
        requests.getPostDetail(id)
    },[])

  

    const createComment = (id, body) => {
        api.post(`/posts/${id}/comment`, 
        body)
        .then(r => {
            console.log(r.data)
            requests.getPostDetail(id)
        })
        .catch(e => console.log(e.response))
    }


    const onSubmitForm = (e) => {
        e.preventDefault();

        const body = {
            text: commentArea
        }

        createComment(id, body)
    }



    return (
        <>
        <Header/>
        <div className="pageContainers">
        {states && states.postDetails ? (
            <>
            <PostCard 
            key={states.postDetails.id}   
            id={states.postDetails.id}
            title={states.postDetails.title}
            text={states.postDetails.text}
            username={states.postDetails.username}
            userVoteDirection={states.postDetails.userVoteDirection}
            votesCount={states.postDetails.votesCount}
            commentsCount={states.postDetails.commentsCount}
            createdAt={states.postDetails.createdAt}
     
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


        
        <Comment postDetails={states.postDetails}
                makeVoteComment={requests.makeVoteComment}
                id={id}
                    />
        </div>
        </>
    )
}