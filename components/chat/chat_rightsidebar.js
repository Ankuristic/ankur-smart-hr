import React from "react";
import {
  PlaceHolder,
  Attachment,
  Avatar_05,
  Avatar_02,
  Avatar_13,
  Avatar_16,
} from "../../common/image_path";
function Chat_rightsidebar() {
  return (
    <div
      className="col-lg-3 message-view chat-profile-view chat-sidebar"
      id="task_window"
    >
      <div className="chat-window video-window">
        <div className="fixed-header">
          <ul className="nav nav-tabs nav-tabs-bottom">
            <li className="nav-item">
              {/* <a className="nav-link" href="#calls_tab" data-toggle="tab">
                Calls
              </a> */}
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#profile_tab"
                data-toggle="tab"
              >
                Profile
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content chat-contents">
          <div className="content-full tab-pane" id="calls_tab">
            <div className="chat-wrap-inner">
              <div className="chat-box">
                <div className="chats">
                  <div className="chat chat-left">
                    <div className="chat-avatar">
                      <a
                        href="/orange/app/profile/employee-profile"
                        className="avatar"
                      >
                        <img alt="" src={Avatar_02} />
                      </a>
                    </div>
                    {/* <div className="chat-body">
                      <div className="chat-bubble">
                        <div className="chat-content">
                          <span className="task-chat-user">You</span>{" "}
                          <span className="chat-time">8:35 am</span>
                          <div className="call-details">
                            <i className="material-icons">phone_missed</i>
                            <div className="call-info">
                              <div className="call-user-details">
                                <span className="call-description">
                                  Jeffrey Warden missed the call
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="chat chat-left">
                    {/* <div className="chat-avatar">
                      <a
                        href="/orange/app/profile/employee-profile"
                        className="avatar"
                      >
                        <img alt="" src={Avatar_02} />
                      </a>
                    </div>
                    <div className="chat-body">
                      <div className="chat-bubble">
                        <div className="chat-content">
                          <span className="task-chat-user">John Doe</span>{" "}
                          <span className="chat-time">8:35 am</span>
                          <div className="call-details">
                            <i className="material-icons">call_end</i>
                            <div className="call-info">
                              <div className="call-user-details">
                                <span className="call-description">
                                  This call has ended
                                </span>
                              </div>
                              <div className="call-timing">
                                Duration: <strong>5 min 57 sec</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-line">
                    <span className="chat-date">January 29th, 2019</span>
                  </div>
                  <div className="chat chat-left">
                    <div className="chat-avatar">
                      <a
                        href="/orange/app/profile/employee-profile"
                        className="avatar"
                      >
                        <img alt="" src={Avatar_05} />
                      </a>
                    </div>
                    <div className="chat-body">
                      <div className="chat-bubble">
                        <div className="chat-content">
                          <span className="task-chat-user">Richard Miles</span>{" "}
                          <span className="chat-time">8:35 am</span>
                          <div className="call-details">
                            <i className="material-icons">phone_missed</i>
                            <div className="call-info">
                              <div className="call-user-details">
                                <span className="call-description">
                                  You missed the call
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat chat-left">
                    <div className="chat-avatar">
                      <a
                        href="/orange/app/profile/employee-profile"
                        className="avatar"
                      >
                        <img alt="" src={Avatar_02} />
                      </a>
                    </div> */}
                    {/* <div className="chat-body">
                      <div className="chat-bubble">
                        <div className="chat-content">
                          <span className="task-chat-user">You</span>{" "}
                          <span className="chat-time">8:35 am</span>
                          <div className="call-details">
                            <i className="material-icons">ring_volume</i>
                            <div className="call-info">
                              <div className="call-user-details">
                                <a
                                  href="#"
                                  className="call-description call-description--linked"
                                  data-qa="call_attachment_link"
                                >
                                  Calling John Smith ...
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-full tab-pane show active" id="profile_tab">
            <div className="display-table">
              <div className="table-row">
                <div className="table-body">
                  <div className="table-content">
                    <div className="chat-profile-img">
                      <div className="edit-profile-img">
                        <img src={Avatar_02} alt="" />
                        <span className="change-img">Change Image</span>
                      </div>
                      <h3 className="user-name m-t-10 mb-0">John Doe</h3>
                      <small className="text-muted">Web Designer</small>
                      <a href="" className="btn btn-primary edit-btn">
                        <i className="fa fa-pencil" />
                      </a>
                    </div>
                    <div className="chat-profile-info">
                      <ul className="user-det-list">
                        <li>
                          <span>Username:</span>
                          <span className="float-right text-muted">
                            johndoe
                          </span>
                        </li>
                        <li>
                          <span>DOB:</span>
                          <span className="float-right text-muted">
                            24 July
                          </span>
                        </li>
                        <li>
                          <span>Email:</span>
                          <span className="float-right text-muted">
                            johndoe@example.com
                          </span>
                        </li>
                        <li>
                          <span>Phone:</span>
                          <span className="float-right text-muted">
                            9876543210
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat_rightsidebar;
