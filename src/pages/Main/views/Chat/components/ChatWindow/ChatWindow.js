import React from 'react'
import './chat_window.scss'
import {
  FiberManualRecord as Dot,
  Videocam,
  Phone,
  InsertEmoticon,
  AttachFile,
  Send,
  Settings,
} from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { setChat, setChatList } from '../../../../../../features/chatSlice'
import { Dropdown, Icon, Loader, Alert } from 'rsuite'
import axios from '../../../../../../helpers/Api'
const ChatWindow = () => {
  const dispatch = useDispatch()
  const chat = useSelector((state) => state.chat.currentChat)
  const [loading, setLoading] = React.useState(false)

  const removeChat = async () => {
    try {
      setLoading(true)
      const { data } = await axios.delete('/backend/api/inbox/remove/chat', {
        params: { userId: chat.user._id },
      })
      dispatch(setChatList(data))
      setLoading(false)
      dispatch(setChat(undefined))
    } catch (error) {
      Alert.error('500 code error')
    }
  }
  return (
    <div className="chat_window">
      <div className="header">
        <div className="infos">
          <h4 className="username">{chat.user.username}</h4>
          <div className="status">
            <Dot
              className={`status_icon ${
                chat.user.isOnline ? chat.user.status : 'offline'
              }`}
            />
            <p className="status_label">
              {chat.user.isOnline ? chat.user.status : 'offline'}
            </p>
          </div>
        </div>
        <div className="controls">
          <IconButton className="control_button">
            <Videocam className="control_icon" />
          </IconButton>
          <IconButton className="control_button">
            <Phone className="control_icon" />
          </IconButton>
          <Dropdown
            renderTitle={() => (
              <IconButton className="control_button" disabled={loading}>
                {loading ? <Loader /> : <Settings className="control_icon" />}
              </IconButton>
            )}
            placement="leftStart"
          >
            <Dropdown.Item onClick={removeChat}>
              <Icon icon="trash" /> Delete conversation
            </Dropdown.Item>
            <Dropdown.Item onClick={() => dispatch(setChat(undefined))}>
              <Icon icon="close" /> Close disscusion
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <div className="body">
        {chat.messages.map((message) => {
          if (message.isSender)
            return (
              <div className="user-message sent">{message.textMessage}</div>
            )
          return (
            <div className="user-message recieved">{message.textMessage}</div>
          )
        })}
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
