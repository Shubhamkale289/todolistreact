import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog1 from './Blog1'
import Blog2 from './Blog2'
import Nav from './Nav'


export default function Blog() {
  return (
    <ul>
      <li><Link to="/Blog/blog1" >Blog1</Link></li>
      <li><Link to="/Blog/blog2" >Blog2</Link></li>
    </ul>
  )
}
