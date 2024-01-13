import '../Chat/style.css'
import imageOne from '../../assets/img/chat1.jpg'
import imageTwo from '../../assets/img/chat2.jpg'
import imageThree from '../../assets/img/chat5.jpg'
import imageFour from '../../assets/img/chat4.jpg'
import mediaOne from '../../assets/img/media1.jpg'
import mediaTwo from '../../assets/img/media2.jpg'
import mediaThree from '../../assets/img/media3.jpg'
import messageOne from '../../assets/img/message1.jpg'

const Chatter = () => {
  return (
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
              <div className="chat-middle-content">
                <div className="chat-middle-left">
                  <ul>
                    <li>
                      <div className="message-body">
                        <div className="message-image">
                          <img src={imageFour} alt="" />
                        </div>
                        <div className="message-text">
                          <h4>
                            Design Team<span> 9:12 AM</span>
                          </h4>
                          <p>Have a great working week!</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="message-body">
                        <div className="message-image">
                          <img src={imageTwo} alt="" />
                        </div>
                        <div className="message-text">
                          <h4>
                            Design Team<span> 9:14 AM</span>
                          </h4>
                          <p>This new landing page, what do you think?</p>
                          <img src={imageOne} alt="" />
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
                            <span> 9:30 AM </span>You
                          </h4>
                          <p>Ok, Thanks</p>
                        </div>
                        <div className="message-image">
                          <img src={imageThree} alt="" />
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
                    <img src={mediaOne} alt="" />
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
                    <img src={mediaTwo} alt="" />
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
                    <img src={mediaThree} alt="" />
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
                    <img src={mediaOne} alt="" />
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
                  <img src={mediaThree} alt="" />
                </div>
                <div className="media-grid-item">
                  <img src={mediaTwo} alt="" />
                </div>
                <div className="media-grid-item">
                  <img src={mediaThree} alt="" />
                </div>
                <div className="media-grid-item">
                  <img src={mediaOne} alt="" />
                </div>
                <div className="media-grid-item">
                  <img src={mediaTwo} alt="" />
                </div>
                <div className="media-grid-item">
                  <img src={mediaThree} alt="" />
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
  )
}

export default Chatter
