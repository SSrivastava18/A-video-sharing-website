import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Home/>} />
        <Route path = '/video/:categoryId/:videoId' element = {<Video/>} />
      </Routes>
    </div>
    
  )
}

export default App
