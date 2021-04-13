import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, fetchPosts } from './postsSlice'

import { Link } from 'react-router-dom'
import { Spinner } from '../../app/Components/Spinner'
import { PostCard } from '../../app/Components/PostCard'

export const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector( selectAllPosts )
    const postStatus = useSelector( state => state.posts.status )
    const error = useSelector( state => state.posts.error)

    let content

    if ( postStatus === 'loading' ) {
        content = <Spinner />
    } else if ( postStatus === 'succeeded' ) {
        content = posts.map( post => (
            <PostCard postData = { post } />
        ))
    } else if (postStatus === 'failed') {
        content = <div>{error}</div>
    }

    useEffect(() => {
        if ( postStatus === 'idle' ) {
            dispatch( fetchPosts() )
        }
    }, [postStatus, dispatch] )

    return(
        <div>
            { content }
        </div>
        
    )
}
