import React from 'react'
import { Button, Icon, Alert } from 'rsuite'
import axios from '../../../helpers/Api'

const InfosForm = ({ phone, submitLogin }) => {
  const [loading, setLoading] = React.useState(false)
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { data } = await axios.post('/backend/api/auth/register', {
        phone: `+${phone}`,
        email,
        username,
      })
      Alert.success(data.message)
      setLoading(false)
      submitLogin({ user: data.user, accessToken: data.accessToken })
    } catch (error) {
      setLoading(false)
      if (error.response && error.response.status !== 404)
        return Alert.error(error.response.data.message)
      Alert.error('Something went wrong')
    }
  }
  return (
    <>
      <p className="message">Please fill your informations to continue.</p>
      <form className="login_form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form_input"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="email"
          className="form_input"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          className="submit_button"
          onClick={handleSubmit}
          loading={loading}
          disabled={loading}
        >
          continue <Icon icon="page-next" className="button_icon" />
        </Button>
      </form>
    </>
  )
}

export default InfosForm
