import React from 'react'
import './chat_window.scss'
import {
  FiberManualRecord as Dot,
  Videocam,
  Phone,
  InsertEmoticon,
  AttachFile,
  Send,
} from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

const ChatWindow = () => {
  return (
    <div className="chat_window">
      <div className="header">
        <div className="infos">
          <h4 className="username">Monica Geller</h4>
          <div className="status">
            <Dot className="status_icon" />
            <p className="status_label">Active now</p>
          </div>
        </div>
        <div className="controls">
          <IconButton className="control_button">
            <Videocam className="control_icon" />
          </IconButton>
          <IconButton className="control_button">
            <Phone className="control_icon" />
          </IconButton>
        </div>
      </div>
      <div className="body">
        <div className="user-message sent">Hi there</div>
        <div className="user-message recieved">Hey Whats up !</div>
        <div className="user-message sent">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam,
          vel illo ratione eum reprehenderit, delectus doloremque unde
          repudiandae eaque quod pariatur. Dolorem atque voluptatem magni
          consequuntur tempora, architecto est minus.
        </div>
      </div>
      <div className="footer">
        <div className="emoticons">
          <IconButton className="control_button">
            <InsertEmoticon className="control_icon" />
          </IconButton>
        </div>
        <div className="message">
          <input
            type="text"
            placeholder="Your message here ..."
            className="message_input"
          />
        </div>
        <div className="controls">
          <IconButton className="control_button">
            <AttachFile className="control_icon" />
          </IconButton>
          <IconButton className="send_button">
            <Send className="send_icon" />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default ChatWindow
