import React from 'react'
import PinInput from 'react-pin-input'
import { Button, Icon, Loader, Alert } from 'rsuite'
import moment from 'moment'
import axios from '../../../helpers/Api'
const PinForm = ({ setForm, phone, submitLogin }) => {
  const [loading, setLoading] = React.useState(false)
  const [counter, setCounter] = React.useState('00:30')
  const [resend, setResend] = React.useState(false)
  const [pin, setPin] = React.useState('')
  const startCountDown = () => {
    let timer = setInterval(() => {
      setCounter((counter) => {
        if (counter === '00:00') {
          setResend(true)
          clearInterval(timer)
          return counter
        }
        return moment(counter, 'mm:ss').subtract(1, 'seconds').format('mm:ss')
      })
    }, 1000)
  }

  React.useEffect(() => {
    startCountDown()
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { data } = await axios.post('/backend/api/auth/check/code', {
        phone: `+${phone}`,
        code: pin,
      })
      setLoading(false)
      Alert.success(data.message, 5000)
      if (data.user)
        return submitLogin({ user: data.user, accessToken: data.accessToken })
      return setForm('infos_form')
    } catch (error) {
      setLoading(false)
      if (error.response && error.response.status !== 404)
        return Alert.error(error.response.data.message)
      Alert.error('Something went wrong')
    }
  }
  const resendCode = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { data } = await axios.post('/backend/api/auth/send/code', {
        phone: `+${phone}`,
      })
      setLoading(false)
      setCounter('00:30')
      startCountDown()
      Alert.success(data.message, 5000)
    } catch (error) {
      setLoading(false)
      if (error.response && error.response.status !== 404)
        return Alert.error(error.response.data.message)
      Alert.error('Something went wrong')
    }
  }
  return (
    <>
      <p className="message">
        Please confirm your phone number by entering the 6 digits code we've
        sent you
      </p>
      <form className="login_form" onSubmit={handleSubmit}>
        <PinInput
          length={6}
          inputClass="form_input"
          inputFocusStyle={{
            border: '1px solid #ea4b4b',
            boxShadow: '0px 0px 6px -1px #ea4b4b',
          }}
          onChange={(value) => setPin(value)}
        />
        <div className="resend">
          {loading ? <Loader size="xs" className="resend_loader" /> : null}
          <button
            className="resend_pin_button"
            onClick={resendCode}
            disabled={!resend || loading}
          >
            Resend in
          </button>
          <p>- {counter}</p>
        </div>
        <Button
          type="submit"
          className="submit_button"
          loading={loading}
          disabled={loading}
        >
          submit <Icon icon="check" className="button_icon" />
        </Button>
      </form>
    </>
  )
}

export default PinForm
