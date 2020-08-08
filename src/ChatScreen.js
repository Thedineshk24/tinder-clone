import React, { useState } from "react";

const ChatScreen = () => {
  const [message, setMessage] = useState([
    {
      name: "Anushka",
      image: "...",
      message: "hey! dinesh how are u?",
    },
    {
      name: "Kajal",
      image: "...",
      message: "Hi Dinesh ❤",
    },
  ]);
  return (
    <div className="chatScreen">
      <h2>ChatScreen</h2>
    </div>
  );
};

export default ChatScreen;
