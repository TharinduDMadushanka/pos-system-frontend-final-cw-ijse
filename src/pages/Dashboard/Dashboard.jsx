import React from 'react';
import './Dashboard.css';
import Navbar from '../../components/Navbar/Navbar';
import dashboard from '../../assets/dashboard.jpg';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Dashboard = () => {

  const navigate = useNavigate();

  const navCategory= ()=>{
    navigate('/categories');
  }

  return (
    <div className="dashboard">
      <img src={dashboard} alt="Dashboard Background" />
      <Navbar />

      <div className="cards">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          
          <div onClick={navCategory} className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Item Categories</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Items</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Stocks</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer/>

    </div>
  );
};

export default Dashboard;
