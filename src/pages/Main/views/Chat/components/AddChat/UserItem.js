import React from 'react'
import { PersonAdd } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import DefaulAvatar from '../../../../../../images/default_avatar.png'
import { Loader } from 'rsuite'
import './user_item.scss'
const UserItem = ({ avatar, username, phone, disabled, onClick }) => {
  const [loading, setLoading] = React.useState(false)
  const submit = async () => {
    try {
      setLoading(true)
      await onClick()
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  return (
    <div className="user_item">
      <div className="user_infos">
        <img
          className="avatar"
          src={avatar || DefaulAvatar}
          alt="User Avatar"
        />
        <div className="infos">
          <h6 className="username">{username}</h6>
          <p className="phone">{phone}</p>
        </div>
      </div>
      <IconButton
        className="add_button"
        onClick={submit}
        disabled={disabled || loading}
      >
        {loading ? <Loader /> : <PersonAdd className="icon" />}
      </IconButton>
    </div>
  )
}

export default UserItem
