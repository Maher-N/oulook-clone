import React from 'react'
import Navigation from '../Navigation'
import SearchBar from '../SearchBar'
import Icon from './Icon-Menu.png'
import './index.css'
function MainNav() {
  return (
    <>
    <div className='MainNav'>
        <img src={Icon}></img>
        <SearchBar/>
        <Navigation/>
    </div>
    </>
  )
}

export default MainNav