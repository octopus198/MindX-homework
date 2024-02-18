import { useEffect, useState } from "react";
import "./App.css";
import ChatHistory from "./components/ChatHistory";
import CurrentChat from "./components/CurrentChat";

function App() {
  const [inputValue, setInputValue] = useState("")
  const [userList, setUserList] = useState([
    {name: 'Sharuka Nijibum', message:[], timestamp: 0, avatar:'/avatar1.png', key:0},
    {name: 'Urito Nisemuno', message:[], timestamp: 0, avatar:'/avatar2.png', key:1},
    {name: 'Xiang Ledepisipang', message:[], timestamp: 0, avatar:'/avatar3.png', key:2},
    {name: 'Abshini Thipano', message:[], timestamp: 0, avatar:'/avatar4.png', key:3},
    {name: 'Nenko Nimitanip', message:[], timestamp: 0, avatar:'/avatar5.png', key:4},
    {name: 'Shanito Bistroglini', message:[], timestamp: 0, avatar:'/avatar6.png', key:5}
  ])

  const [displayCurrentChat, setDisplayCurrentChat] = useState(false)

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const onClick = (data) => {

    const updatedUserList = userList.map((user) => {
      if (user.key === data.key) {
        return {
          ...user,
          message: [inputValue, ...user.message],
          timestamp: Date.now()
        };
      }
      return user;
    });
  
    updatedUserList.sort((a, b) => b.timestamp - a.timestamp);
    setUserList(updatedUserList);

    if (selectedChat && selectedChat.key === data.key) {
      const updatedSelectedChat = { ...selectedChat };
      updatedSelectedChat.message = [inputValue, ...updatedSelectedChat.message];
      updatedSelectedChat.timestamp = Date.now();
      setSelectedChat(updatedSelectedChat);
    }
    
    console.log(userList)
    setInputValue('')
  }

  const [selectedChat, setSelectedChat] = useState(null)

  const handleUserSelection = (chat) => {
    setSelectedChat(chat)
  }

  return (
    <div className="app">
      <div className="chat-history-container">
        <ChatHistory userList={userList} setDisplayCurrentChat={setDisplayCurrentChat} handleUserSelection={handleUserSelection}/>
      </div>
      <div className="current-chat-container">
        <CurrentChat userList={userList} selectedChat={selectedChat} displayCurrentChat={displayCurrentChat} inputValue={inputValue} setInputValue={handleInput} onClick={onClick} />
      </div>
    </div>
  );
}

export default App;
