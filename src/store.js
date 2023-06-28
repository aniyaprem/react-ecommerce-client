import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './slices/UserSlice'

export default configureStore({
    reducer: {
        userreducer:UserReducer
    },
})