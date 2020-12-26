import React from 'react'
import './chat_item.scss'
import { AccessTime } from '@material-ui/icons'
const ChatItem = ({ status, avatar, username, message, active, onClick }) => {
  const renderStatus = () => {}
  return (
    <div className={`chat_item ${active ? 'active' : ''}`} onClick={onClick}>
      <div className="avatar">
        <img src={avatar} alt="user_avatar" className="user_img" />
        <div className={`status ${status}`}></div>
      </div>
      <div className="chat_body">
        <p className="username">{username}</p>
        <p className="message">{message}</p>
      </div>
      <div className="timestamp">
        <AccessTime className="clock_icon" /> 11:10
      </div>
    </div>
  )
}

export default ChatItem
