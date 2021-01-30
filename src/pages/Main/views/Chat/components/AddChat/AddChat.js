import React from 'react'
import { AddCircle, People, Search } from '@material-ui/icons'
import './add_chat.scss'
import { Modal, Button, Alert } from 'rsuite'
import NoItems from '../NoItems'
import UserItem from './UserItem'
import SearchLoader from '../SearchLoader'
import axios from '../../../../../../helpers/Api'
import { useSelector, useDispatch } from 'react-redux'
import { setChatList } from '../../../../../../features/chatSlice'
const AddChat = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = React.useState(false)
  const [usersList, setUsersList] = React.useState([])
  const chatList = useSelector((state) => state.chat.chatList)
  const [loading, setLoading] = React.useState(false)

  const renderUsersList = () => {
    if (loading) return <SearchLoader />
    if (!usersList.length)
      return <NoItems icon={People} description="No users" />
    return usersList.map(({ avatar, username, phone, _id }, index) => (
      <UserItem
        avatar={avatar}
        username={username}
        phone={phone}
        key={index}
        disabled={chatList.find((chat) => chat.user._id === _id) ? true : false}
        onClick={() => addChat(_id)}
      />
    ))
  }
  const addChat = async (userId) => {
    try {
      const { data } = await axios.post('/backend/api/inbox/add/chat', {
        userId,
      })
      dispatch(setChatList(data))
    } catch (error) {
      if (error.response && error.response.status === 500)
        return Alert(error.response.data)
    }
  }

  const handleSearch = async (e) => {
    try {
      setLoading(true)
      const { data } = await axios.get('/backend/api/user/search', {
        params: { query: e.target.value },
      })
      setUsersList(data)
      setLoading(false)
    } catch (error) {
      if (error.response && error.response.status === 500)
        return Alert(error.response.data)
    }
  }
  return (
    <>
      <div className="add_chat" onClick={() => setModal(true)}>
        <AddCircle className="icon" />
        <div className="description">Add a new discussion</div>
      </div>
      <Modal
        keyboard={false}
        backdrop="static"
        onHide={() => setModal(false)}
        onExit={() => setUsersList([])}
        show={modal}
        className="add_chat_modal"
      >
        <Modal.Header className="modal_header">
          <People className="modal_icon" />{' '}
          <h5 className="modal_title">Search for a friend</h5>
        </Modal.Header>
        <Modal.Body className="modal_body">
          <div className="search">
            <Search className="search_icon" />
            <input
              type="text"
              className="search_input"
              placeholder="Search with the phone number or the username"
              onChange={handleSearch}
            />
          </div>
          <div className="users_list">{renderUsersList()}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button appearance="subtle" onClick={() => setModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddChat
