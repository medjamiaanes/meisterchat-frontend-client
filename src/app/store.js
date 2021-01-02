import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import ChatReducer from '../features/chatSlice'
export default configureStore({
  reducer: {
    user: userReducer,
    chat: ChatReducer,
  },
})
