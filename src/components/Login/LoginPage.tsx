import React from 'react'
import { Link } from 'react-router-dom'
import '../Login/login.css'
import Rafiki from '../../assets/SVG/Rafiki'
import Google from '../../assets/SVG/Google'
import Facebook from '../../assets/SVG/Facebook'
import Github from '../../assets/SVG/Github'

function LoginPage() {
  return (
    <div className="wrapper">
      <div className="page-content">
        <div className="side-image">
          <Rafiki />
        </div>
        <div className="form">
          <h2>Hello there, welcome to Sheeko!</h2>
          <form>
            <h3>Log in</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="520"
              height="2"
              viewBox="0 0 520 2"
              fill="none"
            >
              <path d="M0 1H520" stroke="#DCE8E3" />
            </svg>
            <div className="inputs-wrapper">
              <p className="form-items">
                <label>Email address</label>
                <br />
                <input type="text" name="first_name" className="form-input" />
              </p>
              <p className="form-items">
                <label className="form-items">Password</label>
                <Link to="/forget-password">
                  <label className="text-link"> Forget password? </label>
                </Link>
                <br />
                <input type="password" name="password" className="form-input" />
              </p>
            </div>
            <p className="form-items">
              <button className="login-button" id="sub_btn">
                Login
              </button>
            </p>
          </form>
          <p>or log in with</p>
          <div className="socials-container">
            <button className="social-button">
              <Google />
            </button>
            <button className="social-button">
              <Github />
            </button>
            <button className="social-button">
              <Facebook />
            </button>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="520"
            height="2"
            viewBox="0 0 520 2"
            fill="none"
          >
            <path d="M0 1H520" stroke="#DCE8E3" />
          </svg>
          <footer>
            <p>
              Don't have an account?{' '}
              <Link to="/register" className="text-link">
                Sign Up
              </Link>
              .
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
