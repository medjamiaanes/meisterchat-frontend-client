import React from 'react'
import startChat from '../../../../../../images/start_chat.jpg'
import './start_chat.scss'
import { Button } from 'rsuite'
const StartChat = () => {
  return (
    <div className="start_chat">
      <img src={startChat} className="cover_img" alt="Start chatting" />
    </div>
  )
}

export default StartChat
