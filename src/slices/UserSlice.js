import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
    name: 'user',
    initialState:{},
    reducers:{
        getCurrentUser: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { getCurrentUser } = UserSlice.actions
export default UserSlice.reducer