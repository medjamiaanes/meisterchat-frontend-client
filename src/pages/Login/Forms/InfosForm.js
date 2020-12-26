import React from 'react'
import { Button, Icon } from 'rsuite'
const InfosForm = ({ phone, submitLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    submitLogin({ id: 1, username: 'devmeister', phone: '+213554227633' })
  }
  return (
    <>
      <p className="message">Please fill your informations to continue.</p>
      <form className="login_form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form_input"
          placeholder="Enter your username"
        />
        <br />
        <input
          type="email"
          className="form_input"
          placeholder="Enter your email"
        />
        <Button type="submit" className="submit_button" onClick={handleSubmit}>
          continue <Icon icon="page-next" className="button_icon" />
        </Button>
      </form>
    </>
  )
}

export default InfosForm
