import { useHistory } from "react-router"
import CreatePost from "../components/CreatePost/CreatePost"
import PostCard from "../components/PostCard/PostCard"
import { useContext, useEffect, useState } from 'react'
import { GlobalStateContext } from "../global/GlobalStateContext"

export const FeedPage = () => {

    const history = useHistory()
    const token = window.localStorage.getItem("token")
    
    const { states, setters, requests } = useContext(GlobalStateContext);

    useEffect(()=> {
        if(!token) {
        history.push('/login')
        }
    },[])



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
        <div className="pageContainers">
        <CreatePost/>
        {states.feed ? renderFeed : "carregando"}
        </div>
    )
}