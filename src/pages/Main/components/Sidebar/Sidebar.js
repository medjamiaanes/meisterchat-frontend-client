import React from 'react'
import DefaultAvatar from '../../../../images/chandler.jpeg'
import './sidebar.scss'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { Icon } from 'rsuite'
import {
  Sms,
  Call,
  Person,
  Notifications,
  Settings,
  ExitToApp,
} from '@material-ui/icons'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="avatar">
          <img src={DefaultAvatar} alt="user_avatar" />
        </div>
      </div>
      <div className="sidebar_body">
        <NavLink to="" className="sidebar_link">
          <Sms className="link_icon" />
        </NavLink>
        <NavLink to="" className="sidebar_link">
          <Call className="link_icon" />
        </NavLink>
        <NavLink to="" className="sidebar_link">
          <Person className="link_icon" />
        </NavLink>
        <NavLink to="" className="sidebar_link">
          <Notifications className="link_icon" />
        </NavLink>
      </div>
      <div className="sidebar_footer">
        <NavLink to="" className="sidebar_link">
          <Settings className="link_icon" />
        </NavLink>
        <NavLink to="" className="sidebar_link">
          <ExitToApp className="link_icon" />
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
