//Component to show a single comment

import './style.scss'

import avatarArray from '../../../assets/img/avatarCollection'

import {
    ListGroupItem
} from 'reactstrap'

export const CommentItem = props => {
    const { name, email, body, id } = props.commentData
    const {commentIndex} = props

    return (
        <ListGroupItem>
            <div className="comment-box">
                <h6 className="name text-blue">
                    <img className = "avatar" src={avatarArray[commentIndex % 10]} alt=""/>{ name }
                </h6>
                <p className="content">{ body }</p>
                <p className="email text-right text-pink mb-0">{ email }</p>
            </div>
        </ListGroupItem>
    )
}