import React from 'react'
import DefaultAvatar from '../../../../images/default_avatar.png'
import './sidebar.scss'
import { NavLink, Link, useRouteMatch } from 'react-router-dom'
import { Modal, Button } from 'rsuite'
import {
  Sms,
  Call,
  Person,
  Notifications,
  Settings,
  ExitToApp,
} from '@material-ui/icons'
import { useSelector } from 'react-redux'
const Sidebar = () => {
  const [modal, setModal] = React.useState(false)
  const user = useSelector((state) => state.user.user)
  const match = useRouteMatch()
  const submitLogout = () => {
    localStorage.removeItem('meisterchat_auth')
    window.location.replace('/')
  }
  React.useEffect(() => {
    console.log(user)
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="avatar">
          <img src={user.avatar || DefaultAvatar} alt="user_avatar" />
        </div>
      </div>
      <div className="sidebar_body">
        <NavLink
          to="/chat"
          className="sidebar_link"
          activeClassName="active_link"
        >
          <Sms className="link_icon" />
        </NavLink>
        <NavLink
          to="/calls"
          className="sidebar_link"
          activeClassName="active_link"
        >
          <Call className="link_icon" />
        </NavLink>
        <NavLink
          to="/profile"
          className="sidebar_link"
          activeClassName="active_link"
        >
          <Person className="link_icon" />
        </NavLink>
        <NavLink
          to="/notifications"
          className="sidebar_link"
          activeClassName="active_link"
        >
          <Notifications className="link_icon" />
        </NavLink>
      </div>
      <div className="sidebar_footer">
        <NavLink to="" className="sidebar_link">
          <Settings className="link_icon" />
        </NavLink>
        <Link to="" className="sidebar_link" onClick={() => setModal(true)}>
          <ExitToApp className="link_icon" />
        </Link>
      </div>

      <Modal
        backdrop="static"
        keyboard={false}
        show={modal}
        onHide={() => setModal(false)}
      >
        <Modal.Header className="modal_header">
          <ExitToApp className="modal_icon" />{' '}
          <h5 className="modal_title">Logging out</h5>
        </Modal.Header>
        <Modal.Body>
          <h6>Are you sure you want to logout ?</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button color="red" onClick={submitLogout}>
            Yes
          </Button>
          <Button appearance="subtle" onClick={() => setModal(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Sidebar
