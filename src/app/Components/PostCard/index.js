import './style.scss'

import {
    Card,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap'

export const PostCard  = props => {
    const { title, body } = props.postData

    return(
        <Card className="mb-3 shadow">
            <CardBody>
                <CardTitle tag="h5">{ title }</CardTitle>
                <CardText>{ body }</CardText>
            </CardBody>
        </Card>
    )
} 