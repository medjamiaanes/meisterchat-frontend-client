import React from 'react'
import ChatList from './components/ChatList'
import ChatWindow from './components/ChatWindow'
import './chat.scss'
const Chat = () => {
  return (
    <div className="chat_page">
      <ChatList />
      <ChatWindow />
    </div>
  )
}

export default Chat
