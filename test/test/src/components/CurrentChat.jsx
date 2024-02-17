import React from "react";

const CurrentChat = ({ value, onChange, onClick, messages }) => {
  const handleInput = (e) => {
    onChange(e);
  };
  const handleSendClick = () => {
    onClick();
  };

  const flag = messages.length()
  return (
    <div className="current-chat">
      <div className="chat-header">
        <p>USER NAME</p>
        <div className="chat-header-icons-group">
          <div className="chat-header-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m7.772 2.439l1.077-.344c1.008-.322 2.086.199 2.518 1.217l.86 2.028c.375.883.167 1.922-.514 2.568L9.82 9.706c.117 1.076.478 2.135 1.084 3.177a8.68 8.68 0 0 0 2.271 2.595l2.276-.76c.862-.287 1.801.044 2.33.821l1.232 1.81c.616.904.505 2.15-.258 2.916l-.818.821c-.814.817-1.976 1.114-3.052.778c-2.539-.792-4.873-3.143-7.003-7.053c-2.133-3.916-2.885-7.24-2.258-9.968c.264-1.148 1.082-2.063 2.15-2.404"
              />
            </svg>
          </div>
          <div className="chat-header-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9 16h2v-3h3v-2h-3V8H9v3H6v2h3zm-5 4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413T16 20z"
              />
            </svg>
          </div>
          <div className="chat-header-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M9.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="chat-messages">
        <ul>
          {(flag > 0) ? (messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))): 'Start chat'}
        </ul>
        
      </div>
      <div className="type-message-field">
        <input
          type="text"
          placeholder="Type a message..."
          value={value}
          onChange={handleInput}
        />
        <button onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
};

export default CurrentChat;
