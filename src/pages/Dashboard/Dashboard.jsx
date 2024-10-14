import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Dashboard = () => {

  const navigate = useNavigate();

  const navCategory = ()=>{
    navigate('/categories')
  }

  return (
    <div className="dashboard">

      <Navbar/>

      <div className="content">
        <h1>Welcome to Your Dashboard</h1>
        <p>This is where you can manage your profile and access features.</p>

        <div className="btn-group">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary" onClick={navCategory}>Item Category</button>
            <button type="button" class="btn btn-primary">Middle</button>
            <button type="button" class="btn btn-primary">Right</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
