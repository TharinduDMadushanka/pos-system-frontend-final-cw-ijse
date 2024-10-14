import React from 'react'
import './Home.css'
import main_bg from '../../assets/main-bg.jpg'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <img src={main_bg} alt="" />
    </div>
  )
}

export default Home
