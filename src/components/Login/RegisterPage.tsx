import React from 'react'
import { Link } from 'react-router-dom'

import '../Login/login.css'
import Rafiki from '../../assets/SVG/Rafiki'
import Google from '../../assets/SVG/Google'
import Facebook from '../../assets/SVG/Facebook'
import Github from '../../assets/SVG/Github'

export default function RegisterPage() {



  
  return (
    <div className="wrapper">
      <div className="register-page">
        <div className="side-image">
          <Rafiki />
        </div>
        <div className="register-form">
          <h2>Hello there, welcome to Sheeko!</h2>

          <form>
            <h3>Sign up</h3>
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
                <input className="form-input" type="text" name="first_name" />
              </p>
              <p className="form-items">
                <label>Password</label>

                <br />
                <input className="form-input" type="password" name="password" />
              </p>
              <p className="form-items">
                <label>Confirm Password</label>
                <br />
                <input className="form-input " type="text" name="first_name" />
              </p>

              <p className="form-items">
                <button id="sub_btn" type="submit" className="login-button">
                  Sign Up
                </button>
              </p>
            </div>
          </form>

          <p>or sign up with</p>
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
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="520"
              height="2"
              viewBox="0 0 520 2"
              fill="none"
            >
              <path d="M0 1H520" stroke="#DCE8E3" />
            </svg>
          </div>
          <footer>
            <p>
              Already have an account?{' '}
              <Link to="/" className="text-link">
                Log in
              </Link>
              .
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
