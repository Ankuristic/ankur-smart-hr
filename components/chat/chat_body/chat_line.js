import React, { useState } from "react";

const Chat_line = () => {
  const [date, setDate] = useState("");

  return (
    <div className="chat-line">
      <span className="chat-date">8:30 p.m</span>
    </div>
  );
};

export default Chat_line;
