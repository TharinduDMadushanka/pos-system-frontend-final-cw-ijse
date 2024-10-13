import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // State to track if we are on the login or register form

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and register forms
  };

  return (
    <div className='login'>
      <form>
        <h2 className='text-center'>{isLogin ? 'Login Form' : 'Register Form'}</h2>

        <div data-mdb-input-init className="form-outline mb-4 mt-5">
          <label className="form-label" htmlFor="form2Example1">Email address</label>
          <input type="email" id="form2Example1" className="form-control" placeholder='Enter Your Email'/>
        </div>

        {!isLogin && ( // Show the name input fields only in the register form
          <>
            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example3">First Name</label>
              <input type="text" id="form2Example3" className="form-control" placeholder='Enter Your First Name'/>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example4">Last Name</label>
              <input type="text" id="form2Example4" className="form-control" placeholder='Enter Your Last Name'/>
            </div>
          </>
        )}

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">Password</label>
          <input type="password" id="form2Example2" className="form-control" placeholder='Password'/>
        </div>

        {isLogin && (
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
              </div>
            </div>

            <div className="col forgot">
              <p>Forgot password?</p>
            </div>
          </div>
        )}

        <div className="btn">
          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
            {isLogin ? 'Sign in' : 'Register'}
          </button>
        </div>

        <div className="text-center reg">
          {isLogin ? (
            <p>Not a member? <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'hsla(0, 0%, 100%, 0.523)' }}>Register</span></p>
          ) : (
            <p>Already a member? <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'hsla(0, 0%, 100%, 0.523)' }}>Login</span></p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
