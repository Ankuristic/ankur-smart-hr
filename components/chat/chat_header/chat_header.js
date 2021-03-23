import React from "react";
import {
  PlaceHolder,
  Attachment,
  Avatar_05,
  Avatar_02,
  Avatar_13,
  Avatar_16,
} from "../../../common/image_path";
import Chat_action_button from "./chat_action_button";
function Chat_header() {
  return (
    <div className="fixed-header">
    <div className="navbar">
      <div className="user-details mr-auto">
        <div className="float-left user-img">
          <a className="avatar" href="/orange/app/profile/employee-profile" title="Mike Litorus">
            <img src={Avatar_05} alt="" className="rounded-circle" />
            <span className="status online" />
          </a>
        </div>
        <div className="user-info float-left">
          <a href="/orange/app/profile/employee-profile" title="Mike Litorus"><span>Mike Litorus</span> <i className="typing-text">Typing...</i></a>
          <span className="last-seen">Last seen today at 7:50 AM</span>
        </div>
      </div>
      <Chat_action_button></Chat_action_button>
    </div>
  </div>
  );
}

export default Chat_header;
