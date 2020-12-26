import React from 'react'
import PhoneInput from 'react-phone-input-2'
import { Button, Icon, Alert } from 'rsuite'
import axios from '../../../helpers/Api'
const PhoneForm = ({ setForm, phone, setPhone }) => {
  const [loading, setLoading] = React.useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { data } = await axios.post('/backend/api/auth/send/code', {
        phone: `+${phone}`,
      })
      setLoading(false)
      Alert.success(data.message, 5000)
      setForm('pin_form')
    } catch (error) {
      setLoading(false)
      if (error.response && error.response.status !== 404)
        return Alert.error(error.response.data.message)
      Alert.error('Something went wrong')
    }
  }
  return (
    <>
      <p className="message">Please enter your phone number to continue</p>
      <form className="login_form" onSubmit={handleSubmit}>
        <PhoneInput
          type="text"
          inputClass="form_input"
          buttonClass="phone_input_button"
          placeholder="Enter your phone number"
          country={'dz'}
          inputProps={{ required: true, autoFocus: true }}
          copyNumbersOnly={false}
          countryCodeEditable={false}
          onChange={(value) => setPhone(value)}
        />
        <Button
          type="submit"
          className="submit_button"
          disabled={loading}
          loading={loading}
        >
          next <Icon icon="page-next" className="button_icon" />
        </Button>
      </form>
    </>
  )
}

export default PhoneForm
