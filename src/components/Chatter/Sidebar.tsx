import '../../css/style.css'

import imageOne from '../../assets/img/chat1.jpg'
import imageTwo from '../../assets/img/chat2.jpg'
import imageThree from '../../assets/img/chat5.jpg'
import imageFour from '../../assets/img/chat4.jpg'
import mediaOne from '../../assets/img/media1.jpg'
import mediaTwo from '../../assets/img/media2.jpg'
import mediaThree from '../../assets/img/media3.jpg'
import messageOne from '../../assets/img/message1.jpg'

const Sidebar = () => {
  console.log('Sidebar')
  return (
    <span className="mobile-row">
      <div className="icon-wrapper">
        <div className="icon-inner-wrapper">
          <div className="icon-top">
            <div>
              <span>
                <a href="#">
                  <i className="ri-checkbox-blank-fill"></i>
                </a>
              </span>
            </div>
            <div>
              <span>
                <a href="#">
                  <i className="ri-function-line"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="ri-battery-charge-line"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="ri-calendar-2-line"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="ri-chat-3-fill"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="ri-group-line"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="icon-bottom">
            <div>
              <span>
                <a href="#">
                  <i className="ri-notification-3-line"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="ri-settings-2-line"></i>
                </a>
              </span>
            </div>
            <hr className="icon-wrapper-hr" />
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div id="scroll-bar-style" className="chat-name-wrapper">
        <div className="chat-name-inner-wrapper">
          <div className="chat-box-top-wrap">
            <div className="chat-name-title">
              <span>Messages</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                </svg>
              </span>
            </div>
            <div className="chat-search">
              <form action="" id="search-form">
                <input
                  type="search"
                  id="search-chat"
                  name="search-chat"
                  placeholder="Search.."
                />
                <span className="chat-search-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                </span>
              </form>
            </div>
          </div>

          <div className="inbox-main-wrapper">
            <div className="pinned-chat">
              <div className="pinned-chat-title">
                <span>
                  <i className="ri-pushpin-fill"></i>
                </span>
                <span>PINNED</span>
              </div>
              <div className="chat-list">
                <ul>
                  <li>
                    <a href="#">
                      <div className="chat-details">
                        <div className="chat-details-left">
                          <div className="caht-image">
                            <img src="" alt="chat1" />
                          </div>
                          <div className="chat-name">
                            <span>Putri Tanjak</span>
                            <span className="typng-message">Typing...</span>
                          </div>
                        </div>
                        <div className="chat-details-right">
                          <div className="chat-time">
                            <span>4:30 PM</span>
                            <span className="count-message">2</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="chat-details">
                        <div className="chat-details-left">
                          <div className="caht-image">
                            <img src="" />
                          </div>
                          <div className="chat-name">
                            <span>Design Team</span>
                            <span className="read-message">Good Morning</span>
                          </div>
                        </div>
                        <div className="chat-details-right">
                          <div className="chat-time">
                            <span>8:30 AM</span>
                            <span className="check-message">
                              <i className="ri-check-double-fill"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="chat-details">
                        <div className="chat-details-left">
                          <div className="caht-image">
                            <img src="" alt="chat1" />
                          </div>
                          <div className="chat-name">
                            <span>Ahmed Medi</span>
                            <span className="read-message">
                              Wow, really cool
                            </span>
                          </div>
                        </div>
                        <div className="chat-details-right">
                          <div className="chat-time">
                            <span>2:10 PM</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="all-message">
              <div className="all-message-title">
                <span>
                  <i className="ri-chat-3-fill"></i>
                </span>
                <span>ALL MESSAGE</span>
              </div>
              <div className="chat-list">
                <ul>
                  <li>
                    <a href="#">
                      <div className="chat-details">
                        <div className="chat-details-left">
                          <div className="caht-image">
                            <img src="" alt="chat1" />
                          </div>
                          <div className="chat-name">
                            <span>Claudia Maudi</span>
                            <span className="read-message">
                              Wow, really cool
                            </span>
                          </div>
                        </div>
                        <div className="chat-details-right">
                          <div className="chat-time">
                            <span>2:10 PM</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="chat-details">
                        <div className="chat-details-left">
                          <div className="caht-image">
                            <img src="" alt="chat1" />
                          </div>
                          <div className="chat-name">
                            <span>Novita</span>
                            <span className="typng-message">Typing...</span>
                          </div>
                        </div>
                        <div className="chat-details-right">
                          <div className="chat-time">
                            <span>11:05 AM</span>
                            <span className="count-message">2</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="chat-details">
                        <div className="chat-details-left">
                          <div className="caht-image">
                            <img src="" alt="chat1" />
                          </div>
                          <div className="chat-name">
                            <span>Milie Nose</span>
                            <span className="read-message">Good Morning</span>
                          </div>
                        </div>
                        <div className="chat-details-right">
                          <div className="chat-time">
                            <span>8:30 AM</span>
                            <span className="check-message">
                              <i className="ri-check-double-fill"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="chat-details">
                        <div className="chat-details-left">
                          <div className="caht-image">
                            <img src="" alt="chat1" />
                          </div>
                          <div className="chat-name">
                            <span>Ikhsan SD</span>
                            <span className="not-read-message">
                              What is going on?
                            </span>
                          </div>
                        </div>
                        <div className="chat-details-right">
                          <div className="chat-time">
                            <span>Yesterday</span>
                            <span className="count-message">3</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  )
}

export default Sidebar
