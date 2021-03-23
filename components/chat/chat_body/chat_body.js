import React, { useState, useEffect } from "react";
import Chats from "../chat_body/chats";
import { Chat_action_buttons } from "./chat_action_buttons";
import ChatDataService from "../../../services/data_services/chat.data_service";
import Chat_line from "./chat_line";

import {
  PlaceHolder,
  Attachment,
  Avatar_05,
  Avatar_02,
  Avatar_13,
  Avatar_16,
} from "../../../common/image_path";
function Chat_body() {
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    let db = ChatDataService.getAll();
    db.on("value", (snapshot) => {
      const arr = [];
      snapshot.forEach(function (childSnapshot) {
        let childData = childSnapshot.val();
        childData.Id = childSnapshot.key;
        arr.push(childData);
      });
      setChatData(arr);
    });
  }, []);

  //   return (
  //     <div className="chats">
  //       {chatData.map((item) => (
  //         <chat_content data={item} isLeft={false} />
  //       ))}
  //       {/* <Chat_content></Chat_content> */}
  //       <Chat_line date="8th october" />
  //     </div>
  //   );
  // };
  return (
    <div className="chat-contents">
      <div className="chat-content-wrap">
        <div className="chat-wrap-inner">
          <div className="chat-box">
            <div className="chats">
              {chatData.map((item) => (
                <div className="chat chat-right">
                  <div className="chat-body">
                    <div className="chat-bubble">
                      <div className="chat-content">
                        <p> {item.text} </p>
                        <p>Will you tell me something about yourself?</p>
                        <span className="chat-time">{item.date} </span>
                        <Chat_line date="8th october" />
                      </div>
                      <Chat_action_buttons />
                    </div>
                  </div>
                </div>
              ))}

              {chatData.map((item) => (
                <div className="chat chat-left">
                  <div className="chat-body">
                    <div className="chat-bubble">
                      <div className="chat-content">
                        <p> hello what can i do for you </p>
                        <p>Will you tell me something about yourself?</p>
                        <span className="chat-time">8:30 p.m </span>
                        <Chat_line date="8th october" />
                      </div>
                      <Chat_action_buttons />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat_body;
