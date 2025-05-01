import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Contact } from './pages/Contact'
import { Projects } from './pages/Projects'
import Requests from './pages/Requests'
import Timer from './pages/Timer'
import { About } from './pages/About'
import Layout from './components/Layout'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/requests' element={<Requests />} />
            <Route path='/timer' element={<Timer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App