import { useState } from "react";

import "./App.css";
import ChatHistory from "./components/ChatHistory";
import CurrentChat from "./components/CurrentChat";

function App() {
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState([])

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
      console.log(messages)
      setInputValue("");
    }
  }

  return (
    <div className="app">
      <div className="chat-history-container">
        <ChatHistory/>
      </div>
      <div className="current-chat-container">
        <CurrentChat value={inputValue} onChange={handleChange} onClick={handleClick}  message={messages}/>
      </div>
    </div>
  );
}

export default App;
