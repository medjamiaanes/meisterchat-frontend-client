import React from 'react'
import './no_items.scss'
const NoItems = ({ icon: Icon, description }) => {
  return (
    <div className="no_items">
      <Icon className="icon" />
      <div className="description">{description}</div>
    </div>
  )
}

export default NoItems
