import React from 'react'
import ChatList from './components/ChatList'
import ChatWindow from './components/ChatWindow'
import StartChat from './components/StartChat'
import './chat.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setChatList } from '../../../../features/chatSlice'
import axios from '../../../../helpers/Api'
import { Alert } from 'rsuite'
const Chat = () => {
  const chat = useSelector((state) => state.chat.currentChat)
  const dispatch = useDispatch()
  const fetchChats = async () => {
    try {
      const { data } = await axios.get('/backend/api/inbox/fetch')
      console.log(data)
      dispatch(setChatList(data.chats))
    } catch (error) {
      Alert.error('500 Error code')
    }
  }
  React.useEffect(() => {
    fetchChats()
  }, [])
  return (
    <div className="chat_page">
      <ChatList />
      {chat ? <ChatWindow /> : <StartChat />}
    </div>
  )
}

export default Chat
