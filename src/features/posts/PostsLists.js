import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, fetchPosts } from './postsSlice'
import { selectAllComments, fetchComments } from '../comments/commentsSlice'

import { Spinner } from '../../app/Components/Spinner'
import { PostCard } from '../../app/Components/PostCard'

export const PostsList = () => {
    const dispatch = useDispatch()

    const posts = useSelector( selectAllPosts )
    const postStatus = useSelector( state => state.posts.status )

    const comments = useSelector( selectAllComments )

    const commentStatus = useSelector( state => state.comments.status)

    let content

    //Show a spinner while fetching the data
    if ( postStatus === 'loading' ) {
        content = <Spinner />
    } else if ( postStatus === 'succeeded' && commentStatus === 'succeeded') {
        content = posts.map( post => (
            <PostCard 
                key={post.id} 
                postData = { post } 
                comments = { comments.filter( comment => comment.postId === post.id)}
            />
        ))
    } 

    useEffect( () => {
        if ( postStatus === 'idle' ) {
            dispatch( fetchPosts() )
        }
    }, [postStatus, dispatch] )

    useEffect( () => {
        if ( commentStatus === 'idle' ) {
            dispatch( fetchComments() )
        }
    }, [commentStatus, dispatch])

    return(
        <div>
            { content }
        </div>
        
    )
}
