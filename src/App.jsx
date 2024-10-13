import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
