import { useHistory } from "react-router"
import CreatePost from "../components/CreatePost/CreatePost"
import PostCard from "../components/PostCard/PostCard"
import { useEffect, useState } from 'react'
import { api } from '../services/api'

export const FeedPage = () => {

    const history = useHistory()
    const token = window.localStorage.getItem("token")
    const [feed, setFeed] = useState([]);

    useEffect(()=> {
        if(!token) {
        history.push('/login')
        }
    },[])


    useEffect(() => {
        getPosts(token)
    },[])


    const getPosts = (token) => {
        const res = api.get('posts',
        {
            headers: {
                'Content-Type':'application/json',
                Authorization: token
            }
        })
        .then(r => {
            setFeed(r.data.posts)
            console.log(feed)
        })
        .catch(e => console.log(e.response))
    }


    const renderFeed = feed && feed.map((post) => {
        if(feed.indexOf(post)<10) {
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
        <div>
        <CreatePost/>
        {feed ? renderFeed : "carregando"}
        </div>
    )
}