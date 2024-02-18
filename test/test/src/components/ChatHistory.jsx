import React from "react";

const ChatHistory = ({userList, setDisplayCurrentChat, handleUserSelection}) => {
  const selectChat = (user) => {
    console.log(user)
    setDisplayCurrentChat(true)
    handleUserSelection(user)
  }
  return (
    <div className="chat-history">
      <input className="searchBar" type="text" placeholder="🧑 People, Groups, and Messages" />
      <div className="toggle-bar">
        <button className="toggle-bar-button">All</button>
        <button className="toggle-bar-button">Read</button>
        <button className="toggle-bar-button">Unread</button>
      </div>
      <div>
        {userList.map(user => <div onClick={() => selectChat(user)} className="chat-history-list"><img style={{width: '50px', height: '50px'}} src={user.avatar}/><p>{user.name}</p></div> )}
      </div>
    </div>
  );
};

export default ChatHistory;
