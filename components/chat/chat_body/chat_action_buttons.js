import React from "react";

export const Chat_action_buttons = () => {
  return (
    <div className="chat-action-btns">
      <ul>
        <li>
          <a href="#" className="share-msg" title="Share">
            <i className="fa fa-share-alt" />
          </a>
        </li>
        <li>
          <a href="#" className="edit-msg">
            <i className="fa fa-pencil" />
          </a>
        </li>
        <li>
          <a href="#" className="del-msg">
            <i className="fa fa-trash-o" />
          </a>
        </li>
      </ul>
    </div>
  );
};
