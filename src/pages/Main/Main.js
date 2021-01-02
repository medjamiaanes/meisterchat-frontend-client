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
import ComingSoon from './views/ComingSoon'
const Main = () => {
  return (
    <div className="main_page">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/chat" component={Chat} />
          <Route path="/calls" component={ComingSoon} />
          <Route path="/profile" component={ComingSoon} />
          <Route path="/notifications" component={ComingSoon} />
          <Redirect from="/" to="/chat" />
        </Switch>
      </Router>
    </div>
  )
}

export default Main
