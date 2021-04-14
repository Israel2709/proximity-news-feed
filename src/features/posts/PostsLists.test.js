import React from 'react'
import renderer from 'react-test-renderer'
import { store } from '../../app/store';
import { Provider } from 'react-redux';

import { PostsList} from './PostsLists'

it("Renders when there are posts to show", () => {
    const tree = renderer.create(<Provider store={store}><PostsList /></Provider>).toJSON()
    expect(tree).toMatchSnapshot();
})