import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Base from './Base'
import About from './About'
import Blog from './Blog'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='*' element={<div>The page not Exist</div>} /> */}

        {/* <Route path='/' element={<Base />}/> */}
        <Route path='/home' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<div>The page not Exist</div>} />

      </Routes>
      {/* <Routes>
        <Route path='/contact' element={<div>Contact Page</div>} />
      </Routes> */}
    </BrowserRouter>
  )
}


// browser router is imporrtant type f router 

