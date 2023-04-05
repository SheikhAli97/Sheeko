import { useState } from "react";
import "./css/style.css";
import imageOne from "./assets/img/chat1.jpg";
import imageTwo from "./assets/img/chat2.jpg";
import imageThree from "./assets/img/chat3.jpg";
import imageFour from "./assets/img/chat4.jpg";
import mediaOne from "./assets/img/media1.jpg";
import mediaTwo from "./assets/img/media2.jpg";
import mediaThree from "./assets/img/media3.jpg";
import messageOne from "./assets/img/message1.jpg";

function ChatPage() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Chat App Dashboard</title>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />

      <link rel="stylesheet" href="./assets/css/style.css" />

      <main className="chat-main">
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
                  <img src="./assets/img/chat3.jpg" alt="" />
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
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
                                <img src={imageOne} alt="chat1" />
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
                                <img src={imageTwo} />
                              </div>
                              <div className="chat-name">
                                <span>Design Team</span>
                                <span className="read-message">
                                  Good Morning
                                </span>
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
                                <img src={imageThree} alt="chat1" />
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
                                <img src={imageFour} alt="chat1" />
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
                                <img src={imageOne} alt="chat1" />
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
                                <img src={imageThree} alt="chat1" />
                              </div>
                              <div className="chat-name">
                                <span>Milie Nose</span>
                                <span className="read-message">
                                  Good Morning
                                </span>
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
                                <img src={imageTwo} alt="chat1" />
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

        <span className="tab-row">
          <div id="scroll-bar-style" className="chat-wrapper">
            <div className="chat-inner-wrapper">
              <div className="chat-top">
                <div className="chat-top-title">
                  <div>
                    <img src={imageTwo} alt="chat1" />
                  </div>
                  <div>
                    <h3>Design Team</h3>
                    <p>12 member, 5 online</p>
                  </div>
                </div>
                <div className="chat-top-icon">
                  <span>
                    <i className="ri-vidicon-line"></i>
                  </span>
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <span>
                    <i className="ri-outlet-line"></i>
                  </span>
                </div>
              </div>
              <div className="chat-middle">
                <div className="chat-middle-inner-wrapper">
                  <div className="chat-middle-date">
                    <span className="chat-middle-left-hr"></span>
                    <span>TODAY</span>
                    <span className="chat-middle-right-hr"></span>
                  </div>
                  <div className="caht-middle-content">
                    <div className="chat-middle-left">
                      <ul>
                        <li>
                          <div className="message-body">
                            <div className="message-image">
                              <img src="./assets/img/chat1.jpg" alt="" />
                            </div>
                            <div className="message-text">
                              <h4>
                                Design Team<span>&nbsp&nbsp9:12 AM</span>
                              </h4>
                              <p>Have a great working week!</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="message-body">
                            <div className="message-image">
                              <img src="./assets/img/chat1.jpg" alt="" />
                            </div>
                            <div className="message-text">
                              <h4>
                                Design Team<span>&nbsp&nbsp9:14 AM</span>
                              </h4>
                              <p>This new landing page, what do you think?</p>
                              <img src="./assets/img/message1.jpg" alt="" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="chat-middle-right">
                      <ul>
                        <li>
                          <div className="message-body">
                            <div className="message-text">
                              <h4>
                                <span>9:30 AM&nbsp&nbsp</span>You
                              </h4>
                              <p>Ok, Thanks</p>
                            </div>
                            <div className="message-image">
                              <img src="./assets/img/chat2.jpg" alt="" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-bottom">
                <form action="" id="sendMessage">
                  <input
                    type="text"
                    id="typeMessage"
                    name="typeMessage"
                    placeholder="Your Messages..."
                  />
                  <div className="send-message-icons">
                    <a href="#">
                      <i className="ri-mic-line"></i>
                    </a>
                    <a href="#">
                      <i className="ri-attachment-2"></i>
                    </a>
                    <a href="#">
                      <i className="ri-send-plane-fill"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="scroll-bar-style" className="chat-info-wrapper">
            <div className="chat-info-inner-wrapper">
              <div className="chat-info-title">
                <span>Design Team</span>
                <span>
                  <a href="#">
                    <i className="ri-close-fill"></i>
                  </a>
                </span>
              </div>

              <div className="chat-info-sub-title-wrapper description">
                <div className="chat-info-sub-title">
                  <span>
                    <i className="ri-article-fill"></i>
                  </span>
                  <span>DISCRIPTION</span>
                </div>
                <p>We're passionate about creating digital product design.</p>
              </div>

              <div className="member">
                <div className="chat-info-sub-title-wrapper show-btn">
                  <div className="chat-info-sub-title">
                    <span>
                      <i className="ri-group-fill"></i>
                    </span>
                    <span>MEMBER (12)</span>
                  </div>
                  <div className="show-all-btn">
                    <a href="#">Show All</a>
                  </div>
                </div>
                <div className="member-wrapper">
                  <div className="member-inner-wrapper">
                    <div className="member-text">
                      <span>
                        <img src="./assets/img/chat1.jpg" alt="" />
                      </span>
                      <span>Putri Tanjak</span>
                    </div>
                    <div className="member-icon">
                      <i className="ri-vidicon-line"></i>
                      <i className="ri-chat-3-line"></i>
                    </div>
                  </div>
                  <div className="member-inner-wrapper">
                    <div className="member-text">
                      <span>
                        <img src="./assets/img/chat2.jpg" alt="" />
                      </span>
                      <span>Ahmed Medi</span>
                    </div>
                    <div className="member-icon">
                      <i className="ri-vidicon-line"></i>
                      <i className="ri-chat-3-line"></i>
                    </div>
                  </div>
                  <div className="member-inner-wrapper">
                    <div className="member-text">
                      <span>
                        <img src="./assets/img/chat3.jpg" alt="" />
                      </span>
                      <span>Milie Nose</span>
                    </div>
                    <div className="member-icon">
                      <i className="ri-vidicon-line"></i>
                      <i className="ri-chat-3-line"></i>
                    </div>
                  </div>
                  <div className="member-inner-wrapper">
                    <div className="member-text">
                      <span>
                        <img src="./assets/img/chat4.jpg" alt="" />
                      </span>
                      <span>Vanessa</span>
                    </div>
                    <div className="member-icon">
                      <i className="ri-vidicon-line"></i>
                      <i className="ri-chat-3-line"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="media">
                <div className="chat-info-sub-title-wrapper show-btn">
                  <div className="chat-info-sub-title">
                    <span>
                      <i className="ri-image-fill"></i>
                    </span>
                    <span>MEDIA (29)</span>
                  </div>
                  <div className="show-all-btn">
                    <a href="#">Show All</a>
                  </div>
                </div>

                <div className="media-wrapper">
                  <div className="media-grid-wrapper">
                    <div className="media-grid-item">
                      <img src="./assets/img/media1.jpg" alt="" />
                    </div>
                    <div className="media-grid-item">
                      <img src="./assets/img/media2.jpg" alt="" />
                    </div>
                    <div className="media-grid-item">
                      <img src="./assets/img/media3.jpg" alt="" />
                    </div>
                    <div className="media-grid-item">
                      <img src="./assets/img/media4.jpg" alt="" />
                    </div>
                    <div className="media-grid-item">
                      <img src="./assets/img/media2.jpg" alt="" />
                    </div>
                    <div className="media-grid-item">
                      <img src="./assets/img/media1.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="file-type">
                <div className="chat-info-sub-title-wrapper">
                  <div className="chat-info-sub-title">
                    <span>
                      <i className="ri-folder-reduce-fill"></i>
                    </span>
                    <span>FILE TYPE (29)</span>
                  </div>
                </div>
                <div className="file-type-wrapper">
                  <div className="file-type-inner-wrapper">
                    <div className="file-type-text">
                      <span>
                        <i className="ri-file-3-fill"></i>
                      </span>
                      <span>
                        <h4>Documents</h4>
                        <p>126 files</p>
                      </span>
                    </div>
                    <div className="file-type-icon">
                      <i className="ri-arrow-drop-right-line"></i>
                    </div>
                  </div>

                  <div className="file-type-inner-wrapper">
                    <div className="file-type-text">
                      <span>
                        <i className="ri-vidicon-fill"></i>
                      </span>
                      <span>
                        <h4>Videos</h4>
                        <p>150 videos</p>
                      </span>
                    </div>
                    <div className="file-type-icon">
                      <i className="ri-arrow-drop-right-line"></i>
                    </div>
                  </div>

                  <div className="file-type-inner-wrapper">
                    <div className="file-type-text">
                      <span>
                        <i className="ri-links-fill"></i>
                      </span>
                      <span>
                        <h4>Links</h4>
                        <p>200 links</p>
                      </span>
                    </div>
                    <div className="file-type-icon">
                      <i className="ri-arrow-drop-right-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </main>
    </div>
  );
}

export default ChatPage;
