import React from 'react'
import './Home.css'
import main_bg from '../../assets/main-bg.jpg'
import main_bg2 from '../../assets/main-bg2.jpg'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const navLogin = () =>{
    navigate('/login')
  }

  return (
    <div className='home'>
        {/* <Navbar/> */}

        <h2>TDM</h2>

        <img src={main_bg2} alt="" />

        <h1><i>Welcome To My Shop</i></h1>
        <p>It's Nice to meet you!</p>
        <button onClick={navLogin}>Login</button>
      
    </div>
  )
}

export default Home
