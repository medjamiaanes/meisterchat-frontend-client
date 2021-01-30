import React from 'react'
import './chat_item.scss'
import { AccessTime } from '@material-ui/icons'
import DefaultAvatar from '../../../../../../images/default_avatar.png'
const ChatItem = ({
  status,
  avatar,
  username,
  message,
  timestamp,
  active,
  onClick,
}) => {
  const renderStatus = () => {}
  return (
    <div className={`chat_item ${active ? 'active' : ''}`} onClick={onClick}>
      <div className="avatar">
        <img
          src={avatar || DefaultAvatar}
          alt="user_avatar"
          className="user_img"
        />
        <div className={`status ${status}`}></div>
      </div>
      <div className="chat_body">
        <p className="username">{username}</p>
        <p className="message">{message}</p>
      </div>
      {timestamp ? (
        <div className="timestamp">
          <AccessTime className="clock_icon" /> {timestamp}
        </div>
      ) : null}
    </div>
  )
}

export default ChatItem
