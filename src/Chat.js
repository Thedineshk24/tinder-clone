import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Chat.css";

const Chat = ({ name, message, profilePic, timestamp }) => {
  return (
    <div className="chat">
      <Avatar className="chat_image" alt={name} src={profilePic} />

      <div className="chat_details">
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
      <p className="chat_timestamp">{timestamp}</p>
    </div>
  );
};

export default Chat;