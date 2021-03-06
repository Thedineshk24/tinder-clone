import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

import "./chatScreen.css";
// NOTE : ADDED 'ID' TO REMOVE KEY WARNING
const ChatScreen = () => {
  const [input, setInput] = useState("");
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

  const handleSend = (e) => {
    e.preventDefault();

    setMessage([...message, { message: input }]);
    setInput(""); // cleaning  state
  };
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
      <form className="chatScreen_input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen_inputField"
          type="text"
          placeholder="Send a Message . . ."
        />
        <button
          type="submit"
          className="chatScreen_inputButton"
          onClick={handleSend}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
