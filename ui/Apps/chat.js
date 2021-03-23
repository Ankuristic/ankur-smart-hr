import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
// import {
//   PlaceHolder,
//   Attachment,
//   Avatar_05,
//   Avatar_02,
//   Avatar_13,
//   Avatar_16,
// } from "../../common/image_path";
import Chat_body from "../../components/chat/chat_body/chat_body";
import Chat_header from "../../components/chat/chat_header/chat_header";
import Chat_rightsidebar from "../../components/chat/chat_rightsidebar";
import Chat_footer from "./../../components/chat/chat_footer";
import ChatDataService from "../../services/data_services/chat.data_service";

function ChatPage() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    let db = ChatDataService.getAll();
    db.on("value", (snapshot) => {
      const arr = [];
      snapshot.forEach(function (childSnapshot) {
        let childData = childSnapshot.val();
        childData.Id = childSnapshot.key;
        arr.push(childData);
      });
      setChats(arr);
    });
  }, []);

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Chat - HRMS Admin Template</title>
        <meta name="description" content="Chat" />
      </Helmet>
      {/* Chat Main Row */}
      <div className="chat-main-row">
        {/* Chat Main Wrapper */}
        <div className="chat-main-wrapper">
          {/* Chats View */}
          <div className="col-lg-9 message-view task-view">
            <div className="chat-window">
              <Chat_header></Chat_header>
              <Chat_body></Chat_body>
              <Chat_footer></Chat_footer>
            </div>
          </div>
          <Chat_rightsidebar></Chat_rightsidebar>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
