import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

import "./chatScreen.css";
// NOTE : ADDED 'ID' TO REMOVE KEY WARNING
const ChatScreen = () => {
  const [message, setMessage] = useState([
    {
      name: "Anushka",
      image:
        "https://www.freewalldownload.com/anushka-shetty/amazing-anushka-shetty-home-look-free-desktop-mobile-background-hd-wallpaper.jpg",
      message: "hey! dinesh how are u?",
      id: 1,
    },
    {
      name: "Anushka",
      image:
        "https://www.freewalldownload.com/anushka-shetty/amazing-anushka-shetty-home-look-free-desktop-mobile-background-hd-wallpaper.jpg",
      message: "Hi Dinesh ❤",
      id: 2,
    },
    {
      message: "Hey How Are u Anushka",
      id: 3,
    },
  ]);
  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">
        You Matched With Anushka on 8/8/2020
      </p>
      {message.map((msg) =>
        msg.name ? (
          <div className="chatScreen_message" key={msg.id}>
            <Avatar
              className="chatScreen_avatar"
              alt={msg.name}
              src={msg.image}
            />
            <p className="chatScreen_text"> {msg.message} </p>
          </div>
        ) : (
          <div className="chatScreen_message" key={msg.id}>
            <p className="chatScreen_textUser"> {msg.message} </p>
          </div>
        )
      )}
    </div>
  );
};

export default ChatScreen;
