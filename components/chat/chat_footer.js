import React, { Component } from "react";
import {
  PlaceHolder,
  Attachment,
  Avatar_05,
  Avatar_02,
  Avatar_13,
  Avatar_16,
} from "../../common/image_path";

class chat_footer extends Component {
  state = {
    message: { text: "" },
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   //call the server
  //   console.log("submitted");
  // };

  handleChange =e  => {
    const message = { ...this.state.message };
    message.text = e.currentTarget.value;
    this.setState({ message });
  };
  render() {
    return (
      <div className="chat-footer">
        <div className="message-bar">
          <div className="message-inner">
            <a
              className="link attach-icon"
              href="#"
              data-toggle="modal"
              data-target="#drag_files"
            >
              <img src={Attachment} alt="" />
            </a>
            <div className="message-area">
              <div className="input-group">
                <textarea
                  value={this.state.message.text}
                  onChange={this.handleChange}
                  id="text"
                  name="text"
                  className="form-control"
                  placeholder="Type message..."
                  // defaultValue={""}
                />
                <span className="input-group-append">
                  <button className="btn btn-custom" type="button">
                    <i className="fa fa-send" />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default chat_footer;
