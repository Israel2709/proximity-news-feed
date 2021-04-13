import './style.scss'

import {
    ListGroupItem
} from 'reactstrap'

export const CommentItem = props => {
    const { name, email, body } = props.commentData

    return (
        <ListGroupItem>
            <div className="comment-box">
                <h6 className="name text-blue">{ name }</h6>
                <p className="content">{ body }</p>
                <p className="email text-right text-pink mb-0">{ email }</p>
            </div>
        </ListGroupItem>
    )
}