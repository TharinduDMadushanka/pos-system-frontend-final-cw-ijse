import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='login'>
      <form>

        <h2 className='text-center'>Login Form</h2>

        <div data-mdb-input-init className="form-outline mb-4 mt-5">
        <label className="form-label" htmlFor="form2Example1">Email address</label>
          <input type="email" id="form2Example1" className="form-control" placeholder='Enter Your Email'/>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
        <label className="form-label" htmlFor="form2Example2">Password</label>
          <input type="password" id="form2Example2" className="form-control" placeholder='Password'/>
        </div>

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

        <div className="btn">
        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>
        </div>

        <div className="text-center reg">
          <p>Not a member? <span>Register</span></p>
        </div>

      </form>
    </div>
  );
}

export default Login;
