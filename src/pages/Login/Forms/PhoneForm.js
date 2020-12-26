import React from 'react'
import PhoneInput from 'react-phone-input-2'
import { Button, Icon } from 'rsuite'

const PhoneForm = ({ setForm, phone, setPhone }) => {
  const handleSubmit = (e) => {
    setForm('pin_form')
  }
  return (
    <>
      <p className="message">Please login with your phone number to continue</p>
      <form className="login_form" onSubmit={handleSubmit}>
        <PhoneInput
          type="text"
          inputClass="form_input"
          buttonClass="phone_input_button"
          placeholder="Enter your phone number"
          country={'dz'}
          inputProps={{ required: true, autoFocus: true }}
          onChange={(value) => setPhone(value)}
        />
        <Button type="submit" className="submit_button">
          next <Icon icon="page-next" className="button_icon" />
        </Button>
      </form>
    </>
  )
}

export default PhoneForm
