import React from 'react'
import { Link } from 'react-router-dom'
import '../Login/login.css'

function LoginPage() {
  return (
    <div className="wrapper">
      <div className="page-content">
        <div className="side-image">
          <img src="src/assets/img/rafiki.svg" height={198.2} width={266} />
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
              <button className="login-button" id="sub_btn" type="submit">
                Login
              </button>
            </p>
          </form>
          <p>or log in with</p>
          <div className="socials-container">
            <button className="social-button">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="&#240;&#159;&#166;&#134; icon &#34;Facebook v1&#34;">
                  <path
                    id="Vector"
                    d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                    fill="#3C5A99"
                  />
                  <path
                    id="Vector_2"
                    d="M17.2438 23.9999V16.7124H19.7L20.0688 13.8593H17.2438V12.0437C17.2438 11.2187 17.4719 10.6593 18.6531 10.6593H20.15V8.11555C19.8906 8.08118 18.9969 8.00305 17.9563 8.00305C15.7844 8.00305 14.2969 9.32805 14.2969 11.7624V13.8624H11.85V16.7156H14.2969V23.9999H17.2438Z"
                    fill="white"
                  />
                </g>
              </svg>
            </button>
            <button className="social-button">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="&#240;&#159;&#166;&#134; icon &#34;github&#34;">
                  <path
                    id="Vector"
                    d="M16 1.33339C12.1513 1.29428 8.4445 2.78487 5.69431 5.47756C2.94411 8.17025 1.37555 11.8447 1.33333 15.6934C1.34816 18.735 2.32659 21.6936 4.12808 24.1443C5.92957 26.595 8.46143 28.4116 11.36 29.3334C12.0933 29.4667 12.36 29.0267 12.36 28.6401C12.36 28.2534 12.36 27.4001 12.36 26.2001C8.28 27.0667 7.41333 24.2801 7.41333 24.2801C7.14173 23.4053 6.56431 22.6575 5.78667 22.1734C4.45333 21.2934 5.89333 21.3067 5.89333 21.3067C6.3542 21.3683 6.79514 21.5335 7.18308 21.7898C7.57102 22.0461 7.89589 22.387 8.13333 22.7867C8.54711 23.5042 9.22604 24.0306 10.024 24.2525C10.822 24.4745 11.6752 24.3742 12.4 23.9734C12.4745 23.2432 12.8052 22.563 13.3333 22.0534C10.08 21.6934 6.66667 20.4667 6.66667 14.9601C6.63757 13.5236 7.16832 12.1322 8.14667 11.0801C7.7011 9.84682 7.75371 8.48848 8.29333 7.29339C8.29333 7.29339 9.53333 6.90673 12.2933 8.76006C14.6959 8.11984 17.2241 8.11984 19.6267 8.76006C22.4267 6.90673 23.6267 7.29339 23.6267 7.29339C24.1663 8.48848 24.2189 9.84682 23.7733 11.0801C24.7744 12.1129 25.3339 13.495 25.3333 14.9334C25.3333 20.4534 21.8933 21.6667 18.6667 22.0267C19.02 22.3698 19.2929 22.7868 19.4658 23.2479C19.6387 23.709 19.7073 24.2026 19.6667 24.6934V28.6267C19.6667 28.6267 19.9333 29.4667 20.6667 29.3201C23.557 28.3926 26.0803 26.5755 27.8763 24.1282C29.6722 21.681 30.6488 18.7288 30.6667 15.6934C30.6245 11.8447 29.0559 8.17025 26.3057 5.47756C23.5555 2.78487 19.8487 1.29428 16 1.33339Z"
                    fill="#231F20"
                  />
                </g>
              </svg>
            </button>
            <button className="social-button">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="&#240;&#159;&#166;&#134; icon &#34;google&#34;">
                  <path
                    id="Vector"
                    d="M31.6888 12.8664H30.4V12.8H16V19.2H25.0424C23.7232 22.9256 20.1784 25.6 16 25.6C10.6984 25.6 6.4 21.3016 6.4 16C6.4 10.6984 10.6984 6.4 16 6.4C18.4472 6.4 20.6736 7.3232 22.3688 8.8312L26.8944 4.3056C24.0368 1.6424 20.2144 0 16 0C7.164 0 0 7.164 0 16C0 24.836 7.164 32 16 32C24.836 32 32 24.836 32 16C32 14.9272 31.8896 13.88 31.6888 12.8664Z"
                    fill="#FFC107"
                  />
                  <path
                    id="Vector_2"
                    d="M1.8448 8.5528L7.1016 12.408C8.524 8.8864 11.9688 6.4 16 6.4C18.4472 6.4 20.6736 7.3232 22.3688 8.8312L26.8944 4.3056C24.0368 1.6424 20.2144 0 16 0C9.8544 0 4.5248 3.4696 1.8448 8.5528Z"
                    fill="#FF3D00"
                  />
                  <path
                    id="Vector_3"
                    d="M16 32C20.1328 32 23.888 30.4184 26.7272 27.8464L21.7752 23.656C20.1688 24.8728 18.172 25.6 16 25.6C11.8384 25.6 8.3048 22.9464 6.9736 19.2432L1.756 23.2632C4.404 28.4448 9.7816 32 16 32Z"
                    fill="#4CAF50"
                  />
                  <path
                    id="Vector_4"
                    d="M31.6888 12.8664H30.4V12.8H16V19.2H25.0424C24.4088 20.9896 23.2576 22.5328 21.7728 23.6568C21.7736 23.656 21.7744 23.656 21.7752 23.6552L26.7272 27.8456C26.3768 28.164 32 24 32 16C32 14.9272 31.8896 13.88 31.6888 12.8664Z"
                    fill="#1976D2"
                  />
                </g>
              </svg>
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
