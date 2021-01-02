import React from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'
import './search_loader.scss'
const SearchLoader = () => {
  return (
    <div className="search_loader">
      <ScaleLoader color="#ea4b4b" size={50} />
    </div>
  )
}

export default SearchLoader
