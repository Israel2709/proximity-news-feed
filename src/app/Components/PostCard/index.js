//Component to show a single post

import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { commentAdded } from '../../../features/comments/commentsSlice'

import './style.scss'

import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    ListGroup,
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap'

import { CommentItem } from '../CommentItem'

export const PostCard = props => {
    const [listAllComments, setListAllComments] = useState(false)
    const [commentBody, setCommentBody] = useState('')

    const dispatch = useDispatch()
    const { title, body, id } = props.postData
    const comments = props.comments

    const onBodyChanged = e => setCommentBody(e.target.value)

    const saveComment = () => {
        dispatch(commentAdded(commentBody, id))
        setCommentBody('')
    }

    //Show the first comment by default, and show the complete comment list
    //if listAllComments is set to 'true'

    //listAllComments is handled by a CTA at cards bottom

    const commentContent = listAllComments
        ? comments.map(comment => <CommentItem key={comment.id} commentData={comment} />)
        : <CommentItem commentData={comments[0]} />

    return (
        <Card className="mb-3 shadow">
            <CardBody>
                <CardTitle tag="h5" className="text-blue text-capitalize">{title}</CardTitle>
                <CardText>{body}</CardText>
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
                        onClick={() => { setListAllComments(true) }}
                    >
                        See {comments.length - 1} more comments
                    </span>
                }
            </CardFooter>
            <Form className="m-3">
                <FormGroup className="d-flex mb-0">
                    <Input placeholder="Write a comment" onChange={onBodyChanged} />
                    <Button type="button" color="primary" onClick={saveComment} disabled={!commentBody}>Comment</Button>
                </FormGroup>
            </Form>
        </Card>
    )
}