import { Chat_action_buttons } from "./chat_action_buttons";
import React, { useState } from "react";
import Item from "antd/lib/list/Item";

const Chat_content = () => {
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");
  const [isLeft, setIsLeft] = useState("");

  return (
    // TODO:
    <>
      <div className="chat chat-right">
        <div className="chat-body">
          <div className="chat-bubble">
            <div className="chat-content">
              <p> {item.message} </p>
              <p>Will you tell me something about yourself?</p>
              <span className="chat-time">{item.date} </span>
            </div>
            <Chat_action_buttons />
          </div>
        </div>
      </div>

      <div className="chat chat-left">
        <div className="chat-body">
          <div className="chat-bubble">
            <div className="chat-content">
              <p> hello what can i do for you </p>
              <p>Will you tell me something about yourself?</p>
              <span className="chat-time">8:30 p.m </span>
            </div>
            <Chat_action_buttons />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat_content;
