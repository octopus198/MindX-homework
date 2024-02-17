import React from "react";

const ChatHistory = () => {
  return (
    <div>
      <input type="text" placeholder="🧑 People, Groups, and Messages" />
      <div className="toggle-bar">
        <button>All</button>
        <button>Read</button>
        <button>Unread</button>
      </div>
      
    </div>
  );
};

export default ChatHistory;
