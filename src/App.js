import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './features/userSlice'
import Login from './pages/Login'
import Main from './pages/Main'
import * as Storage from './helpers/Storage'
import { setAuthorization } from './helpers/Api'
import 'rsuite/dist/styles/rsuite-default.css'
import './App.scss'
function App() {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.user)

  React.useEffect(() => {
    const storageAuth = Storage.getObject('meisterchat_auth')
    if (storageAuth) {
      setAuthorization(storageAuth.accessToken)
      dispatch(login(storageAuth))
    }
  }, [])

  return <div className="App">{auth ? <Main /> : <Login />}</div>
}

export default App
