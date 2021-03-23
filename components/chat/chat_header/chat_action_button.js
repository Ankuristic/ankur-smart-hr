import React from "react";

function Chat_action_button() {
  return (
    <div>
      <ul className="nav custom-menu">
        <li className="nav-item">
          <a
            className="nav-link task-chat profile-rightbar float-right"
            id="task_chat"
            href="#task_window"
          >
            <i className="fa fa-user" />
          </a>
        </li>
        <li className="nav-item">
          <a href="/orange/conversation/voice-call" className="nav-link">
            <i className="fa fa-phone" />
          </a>
        </li>
        <li className="nav-item">
          <a href="/orange/conversation/video-call" className="nav-link">
            <i className="fa fa-video-camera" />
          </a>
        </li>
        <li className="nav-item dropdown dropdown-action">
          <a
            aria-expanded="false"
            data-toggle="dropdown"
            className="nav-link dropdown-toggle"
            href=""
          >
            <i className="fa fa-cog" />
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a href="" className="dropdown-item">
              Delete Conversations
            </a>
            <a href="" className="dropdown-item">
              Settings
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Chat_action_button;
