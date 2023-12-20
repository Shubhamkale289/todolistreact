import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

export default function Home() {
  return (
    <>
        <Nav />
        <div>Home</div>

        {/* <li><Link to={'/'}>Home</Link></li> */}
        {/* <li><Link to={'/about'}>about</Link></li>
        <li><Link to={'/shubham'}>shubham</Link></li> */}
    </>
  )
}
