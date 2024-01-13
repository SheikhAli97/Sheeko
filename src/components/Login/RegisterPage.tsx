import React from 'react'
import { Link } from 'react-router-dom'

import '../Login/login.css'

export default function RegisterPage() {
  return (
    <div>
      <h2>Hello there, welcome to Sheeko!</h2>
      Sign up
      <form>
        <p>
          <label>Email</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>Password</label>

          <br />
          <input type="password" name="password" required />
        </p>
        <p>
          <label>Confirm Password</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p></p>

        <p>
          <button id="sub_btn" type="submit">
            Login
          </button>
        </p>
      </form>
      or sign up with
      <div>
        <button>google</button>
        <button>github</button>
        <button>facebook</button>
      </div>
      <footer>
        <p>
          Already have an account? <Link to="/">Log in</Link>.
        </p>
      </footer>
    </div>
  )
}
