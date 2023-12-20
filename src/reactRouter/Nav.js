import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <ul>
        <li><Link to="/home" >Home</Link></li>
        <li><Link to="/Blog" >Blog</Link></li>
        <li><Link to="/about us" >About Us</Link></li>
    </ul>
  )
}
