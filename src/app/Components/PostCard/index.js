import React, { useState } from 'react'

import './style.scss'

import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    ListGroup,
} from 'reactstrap'

import { CommentItem } from '../CommentItem'

export const PostCard  = props => {
    const [ listAllComments, setListAllComments ] = useState( false )
    const { title, body } = props.postData
    const comments = props.comments

    const commentContent = listAllComments 
        ? comments.map( comment => <CommentItem key = { comment.id } commentData = { comment }/>) 
        : <CommentItem commentData = { comments[0] } />

    return(
        <Card className="mb-3 shadow">
            <CardBody>
                <CardTitle tag="h5" className="text-blue text-capitalize">{ title }</CardTitle>
                <CardText>{ body }</CardText>
                <p className="text-muted text-right mb-0">{comments.length} comments</p>
            </CardBody>
            <CardFooter className="p-3">
                <ListGroup>
                    {commentContent}
                </ListGroup>
                { 
                    comments.length && listAllComments === false &&
                    <span
                        className="show-comments text-right mt-2 mb-0"
                        onClick = { () => { setListAllComments(true)}}
                    >
                        See {comments.length - 1 } more comments
                    </span> 
                }
            </CardFooter>
        </Card>
    )
} 