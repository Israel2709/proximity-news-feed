import React from 'react'
import renderer from 'react-test-renderer'
import { store } from '../../store';
import { Provider } from 'react-redux';

import { PostCard } from './index'

it("Renders when a post has comments", () => {
    const tree = renderer.create(<Provider store={store}><PostCard
        key={1}
        postData={ {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        } }
        comments={ [{
            postId: 1,
            id: 1,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
        }] }
    /></Provider>).toJSON()
    expect(tree).toMatchSnapshot();
})