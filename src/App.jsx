import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'
import ItemCategory from './pages/ItemCategory/ItemCategory'
import Item from './pages/Item/Item'

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/categories' element={<ItemCategory/>}/>
            <Route path='/item' element={<Item/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
