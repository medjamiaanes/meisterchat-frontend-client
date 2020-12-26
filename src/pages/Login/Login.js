import React from 'react'
import PeopleChat from '../../images/people_chat.jpg'
import Logo from '../../images/logo.png'
import PhoneForm from './Forms/PhoneForm'
import PinForm from './Forms/PinForm'
import InfosForm from './Forms/InfosForm'
import 'react-phone-input-2/lib/style.css'
import './login.scss'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import * as Storage from '../../helpers/Storage'
const Login = () => {
  const dispatch = useDispatch()
  const [form, setForm] = React.useState('phone_form')
  const [phone, setPhone] = React.useState('')

  const submitLogin = (auth) => {
    Storage.setObject('meisterchat_auth', auth)
    dispatch(login(auth))
  }
  const renderForm = () => {
    switch (form) {
      case 'phone_form':
        return <PhoneForm setForm={setForm} phone={phone} setPhone={setPhone} />
      case 'pin_form':
        return (
          <PinForm setForm={setForm} phone={phone} submitLogin={submitLogin} />
        )
      case 'infos_form':
        return <InfosForm phone={phone} submitLogin={submitLogin} />
      default:
        return null
    }
  }

  return (
    <div className="login_page">
      <div className="left_box">
        <img
          src={PeopleChat}
          alt="people_chat_img"
          className="people_chat_img"
        />
        <div className="overlay"></div>
      </div>
      <div className="right_box">
        <div className="header">
          <img src={Logo} alt="meisterchat_logo" className="app_logo" />
        </div>
        <div className="body">
          <h3 className="welcome">Welcome to our app.</h3>
          {renderForm()}
        </div>
        <div className="footer">
          <p className="footer-title">created by the devmeister</p>
          <p className="footer-title">2020 - 2021</p>
        </div>
      </div>
    </div>
  )
}

export default Login
