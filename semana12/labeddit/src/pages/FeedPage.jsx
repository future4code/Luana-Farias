import { useHistory } from "react-router"
import CreatePost from "../components/CreatePost/CreatePost"
import PostCard from "../components/PostCard/PostCard"
import { useContext, useEffect, useState } from 'react'
import { GlobalStateContext } from "../global/GlobalStateContext"
import { api } from '../services/api'
import useInput from '../hooks/useInput'
import Header from '../components/Header/Header'
import { token } from '../utils/token'

export const FeedPage = () => {

    const history = useHistory()
    // const token = window.localStorage.getItem("token")

    const [textArea, onChangeTextArea] = useInput();
    const [titleArea, onChangeTitleArea] = useInput();
    
    const { states, setters, requests } = useContext(GlobalStateContext);

    const createPost = (body) => {
        api.post('posts',
        body,
        {
            headers: {
                'Content-Type' : 'application/json',
                Authorization: token
            }
        })
        .then(r => {
            console.log(r.data)
            states.feed()
        })
        .catch(e => console.log(e.response))
    }

    const onSubmitPost = (e)=> {
        e.preventDefault();

        const body = {
            text: textArea,
            title: titleArea
        }
        createPost(body);
    }





    const renderFeed = states.feed && states.feed.map((post) => {
        if(states.feed.indexOf(post)<10) {
            return <PostCard 
            key={post.id}   
            id={post.id}
            title={post.title}
            text={post.text}
            username={post.username}
            userVoteDirection={post.userVoteDirection}
            votesCount={post.votesCount}
            commentsCount={post.commentsCount}
            createdAt={post.createdAt}
            />
        }     
    })


    return (
        <>
        <Header />
        <div className="pageContainers">

        <CreatePost
            textArea={textArea}
            onChangeTextArea={onChangeTextArea}
            titleArea={titleArea}
            onChangeTitleArea={onChangeTitleArea}
            onSubmitPost={onSubmitPost}
            />

        {states.feed ? renderFeed : "carregando"}
        </div>

        </>
    )
}