import React from 'react'
import './chat_list.scss'
import { Search } from '@material-ui/icons'
import ChatItem from '../ChatItem'
import Chandler from '../../../../../../images/chandler.jpeg'
import Monica from '../../../../../../images/monica.jpg'
const ChatList = () => {
  const chatList = [
    {
      id: 1,
      username: 'Monica Geller',
      message: "Hi i'm monica and i'm a chef",
      status: 'online',
      active: true,
      avatar: Monica,
    },
    {
      id: 2,
      username: 'chandler bing',
      message: "Hi i'm chandler and i use humor as a defense mechanism",
      status: 'offline',
      avatar: Chandler,
    },
    {
      id: 3,
      username: 'chandler bing',
      message: "Hi i'm chandler and i use humor as a defense mechanism",
      status: 'busy',
      avatar: Chandler,
    },
    {
      id: 4,
      username: 'chandler bing',
      message: "Hi i'm chandler and i use humor as a defense mechanism",
      status: 'absent',
      avatar: Chandler,
    },
  ]
  const [chats, setChats] = React.useState(chatList)
  const [chat, setChat] = React.useState(undefined)

  return (
    <div className="chat_list">
      <div className="header">
        <div className="search">
          <Search className="search_icon" />
          <input type="text" className="search_input" placeholder="Search" />
        </div>
      </div>
      <div className="chat_items">
        {chats.map((c, index) => {
          return (
            <>
              <ChatItem
                status={c.status}
                avatar={c.avatar}
                username={c.username}
                message={c.message}
                active={chat && c.id === chat.id}
                key={index}
                onClick={() => setChat(c)}
              />
              <div className="divider"></div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default ChatList
