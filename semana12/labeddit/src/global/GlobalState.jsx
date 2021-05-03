import React,{ useEffect, useState } from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import { api } from '../services/api'


 const GlobalState = (props) => {

    const [feed, setFeed] = useState([]);
    const [postDetails, setPostDetails] = useState({});
    const [vote, setVote] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const getPosts = () => {
        api.get('posts')
        .then(r => {
            setFeed(r.data.posts)
        })
        .catch(e => console.log(e.response))
    }


    const getPostDetail = (id) => {
        setIsLoading(true)
        api.get(`/posts/${id}`)
        .then(r => {
            setPostDetails(r.data.post)
            setIsLoading(false)
        })
        .catch(e => console.log(e.response))
    }

    
    const makePostVote = (id,body) => {
        api.put(`posts/${id}/vote`,
        body)
        .then(r => {
            setVote(r.data)
            getPosts()
            getPostDetail(id)
        })
        .catch(e => console.log(e.response))
    }

    const votePost = (dir,id) => {
        const body = {
            direction: dir
        }
        makePostVote(id,body) 
    }

    const makeVoteComment = (dir,postId,commentId) => {
        const body = {
            direction: dir
        }

        api.put(`posts/${postId}/comment/${commentId}/vote`,
        body)
        .then(r => {
            setVote(r.data)
            getPostDetail(postId)
            console.log(r.data)
        })
        .catch(e=> console.log(e.response))
    }

    const states = { feed, postDetails, isLoading  };
    const setters = { setFeed, setPostDetails, setIsLoading };
    const requests = { getPosts, getPostDetail, votePost, makeVoteComment };

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests}}>
        {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;
