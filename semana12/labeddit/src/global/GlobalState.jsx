import React,{ useEffect, useState } from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import { api } from '../services/api'
import { HowToVote, PinDropSharp } from '@material-ui/icons';
import { token } from '../utils/token'


 const GlobalState = (props) => {

    const [feed, setFeed] = useState([]);
    const [postDetails, setPostDetails] = useState({});
    const [vote, setVote] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    // const token = window.localStorage.getItem("token")

    useEffect(() => {
      getPosts(token)
    })

    const getPosts = (token) => {
        api.get('posts',
        {
            headers: {
                'Content-Type':'application/json',
                Authorization: token
            }
        })
        .then(r => {
            setFeed(r.data.posts)
        })
        .catch(e => console.log(e.response))
    }

    useEffect(() => {
        getPosts(token)
    },[])

    const getPostDetail = (id) => {
        api.get(`/posts/${id}`,
        {
            headers: {
                Authorization: token
            }
        })
        .then(r => {
            setPostDetails(r.data.post)
        })
        .catch(e => console.log(e.response))
    }

    
    const makePostVote = (id,body,token) => {
        api.put(`posts/${id}/vote`,
        body,
        {
            headers: {
                'Content-Type' : 'application/json',
                Authorization: token
            }
        })
        .then(r => {
            setVote(r.data)
            console.log(r.data)
        })
        .catch(e => console.log(e.response))
    }

    const votePost = (dir,id) => {
        const body = {
            direction: dir
        }
        makePostVote(id,body,token) 
    }

    const makeVoteComment = (dir,postId,commentId) => {
        const body = {
            direction: dir
        }

        api.put(`posts/${postId}/comment/${commentId}/vote`,
        body,
        {
            headers :{
                'Content-Type' : 'application/json',
                Authorization: token
            }
        })
        .then(r => console.log(r.data))
        .catch(e=> console.log(e.response))
    }

    const states = { feed, postDetails, isLoading };
    const setters = { setFeed, setPostDetails, setIsLoading }
    const requests = { getPosts, getPostDetail, votePost, makeVoteComment }

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests}}>
        {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;
