import React from 'react'
import NavigationItem from '../NavigationItem'
import './index.css'
import avatar from './Oval.png'
function Navigation() {
  return (
    <div className='Navigation'>
      <NavigationItem/>
      <NavigationItem/>
      <NavigationItem/>
      <NavigationItem/>
      <NavigationItem/>
      <img src={avatar}></img>
    </div>
  )
}

export default Navigation