import React from "react";
import Chat from "./Chat";
import "./Chats.css";
const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Anushka"
        message="hey! dinesh how are u?"
        timestamp="1 hour a go"
        profilePic="https://www.freewalldownload.com/anushka-shetty/amazing-anushka-shetty-home-look-free-desktop-mobile-background-hd-wallpaper.jpg"
      />
      <Chat
        name="Kajal"
        message="hey! dinesh ?"
        timestamp="2 min a go"
        profilePic="https://i.pinimg.com/236x/2a/c6/2c/2ac62c01143617bcfbfdcff5814a5b25.jpg"
      />
      <Chat
        name="Rashmika"
        message="Hi Dinesh ❤"
        timestamp="1 hour a go"
        profilePic="https://i.pinimg.com/564x/7b/3b/3d/7b3b3d66c215cf0f3691787fb9fba8d7.jpg"
      />
    </div>
  );
};

export default Chats;
