import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './features/userSlice'
import Login from './pages/Login'
import Main from './pages/Main'
import 'rsuite/dist/styles/rsuite-default.css'
import './App.scss'
function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  React.useEffect(() => {
    const storageUser = localStorage.getItem('user')
    if (storageUser) dispatch(login(JSON.parse(storageUser)))
  }, [])

  return <div className="App">{user ? <Main /> : <Login />}</div>
}

export default App
