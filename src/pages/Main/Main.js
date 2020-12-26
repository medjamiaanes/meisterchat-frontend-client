import React from 'react'
import './main.scss'
import Sidebar from './components/Sidebar'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import Chat from './views/Chat'
const Main = () => {
  return (
    <div className="main_page">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/chat" component={Chat} />
          <Redirect to="/chat" />
        </Switch>
      </Router>
    </div>
  )
}

export default Main
