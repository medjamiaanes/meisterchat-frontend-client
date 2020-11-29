import React from 'react'
import PeopleChat from '../../images/people_chat.jpg'
import Logo from '../../images/logo.png'
import { Button } from 'rsuite'
import './login.scss'
const Login = () => {
  return (
    <div className="login_page">
      <div className="left_box">
        <img
          src={PeopleChat}
          alt="people_chat_img"
          className="people_chat_img"
        />
      </div>
      <div className="right_box">
        <div className="header">
          <img src={Logo} alt="meisterchat_logo" className="app_logo" />
          <h3 className="title">Welcome Back</h3>
        </div>
        <div className="body">
          <p className="form_title">Please login to continue.</p>
          <form className="login_form">
            <input
              type="text"
              className="phone_input"
              placeholder="Enter your phone number"
            />
            <Button className="submit_button">login</Button>
          </form>
        </div>
        <div className="footer">
          <h5 className="footer-title">created by the devmeister</h5>
          <h5 className="footer-title">2020 - 2021</h5>
        </div>
      </div>
    </div>
  )
}

export default Login
