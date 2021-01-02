import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatList: [],
    currentChat: undefined,
  },
  reducers: {
    setChat: (state, action) => ({ ...state, currentChat: action.payload }),
    setChatList: (state, action) => ({ ...state, chatList: action.payload }),
    prependToChatList: (state, action) => ({
      ...state,
      chatList: [action.payload, ...state.chatList],
    }),
    removeFromChatList: (state, action) => ({
      ...state,
      chatList: state.chatList.filter(
        (chat) => chat.user._id !== action.payload,
      ),
    }),
  },
})

export const {
  setChat,
  setChatList,
  prependToChatList,
  removeFromChatList,
} = chatSlice.actions

export default chatSlice.reducer
