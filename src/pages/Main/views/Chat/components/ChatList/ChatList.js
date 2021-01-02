import React from 'react'
import './chat_list.scss'
import { Search, Sms } from '@material-ui/icons'
import ChatItem from '../ChatItem'
import AddChat from '../AddChat/'
import { useSelector, useDispatch } from 'react-redux'
import { setChat } from '../../../../../../features/chatSlice'
import NoItems from '../NoItems'
const ChatList = () => {
  const dispatch = useDispatch()
  const chatList = useSelector((state) => state.chat.chatList)
  const chat = useSelector((state) => state.chat.currentChat)
  const [search, setSearch] = React.useState('')

  const renderList = () => {
    if (search.trim()) return renderFilteredList()
    return renderAllList()
  }
  const renderFilteredList = () => {
    const list = chatList.filter(
      (chat) =>
        chat.user.username.includes(search) || chat.user.phone.includes(search),
    )
    return list.length ? (
      list.map((c, index) => {
        return (
          <>
            <ChatItem
              status={c.user.isOnline ? c.user.status : 'offline'}
              avatar={c.user.avatar}
              username={c.user.username}
              message={
                c.messages.length ? c.messages[0].textMessage : 'New disscusion'
              }
              active={chat && c.user._id === chat.user._id}
              key={index}
              onClick={() => dispatch(setChat(c))}
            />
            <div className="divider"></div>
          </>
        )
      })
    ) : (
      <NoItems icon={Sms} description="No disscusions found" />
    )
  }
  const renderAllList = () => {
    return chatList.length ? (
      chatList.map((c, index) => {
        return (
          <>
            <ChatItem
              status={c.user.isOnline ? c.user.status : 'offline'}
              avatar={c.user.avatar}
              username={c.user.username}
              message={
                c.messages.length
                  ? c.messages[0].textMessage
                  : 'Click to start disscustion'
              }
              active={chat && c.user._id === chat.user._id}
              key={index}
              onClick={() => dispatch(setChat(c))}
            />
            <div className="divider"></div>
          </>
        )
      })
    ) : (
      <NoItems icon={Sms} description="No disscusions found" />
    )
  }
  return (
    <div className="chat_list">
      <div className="header">
        <div className="search">
          <Search className="search_icon" />
          <input
            type="text"
            className="search_input"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <AddChat />
      <div className="chat_items">{renderList()}</div>
    </div>
  )
}

export default ChatList
