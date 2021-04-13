import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = {
    comments: [],
    status: 'idle',
    error: null
}

export const fetchComments = createAsyncThunk( 'comments/fetchComments', async () => {
    const response = await client.get( 'https://jsonplaceholder.typicode.com/comments' )
    return response
})

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchComments.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.comments = state.comments.concat( action.payload )
        },
        [fetchComments.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default commentsSlice.reducer

export const selectAllComments = state => state.comments.comments