import React, { useState } from "react";

const CurrentChat = ({
  setInputValue,
  inputValue,
  onClick,
  displayCurrentChat,
  selectedChat,
}) => {
  const handleClick = (data) => {
    onClick(data);
  };

  return (
    <div className="current-chat">
      {displayCurrentChat ? (
        <div>
          <div className="chat-header">
            <div className="chat-header-name-avatar">
              <img
                style={{ width: "50px", height: "50px" }}
                src={selectedChat.avatar}
              />
              <p>{selectedChat.name}</p>
            </div>
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
            { selectedChat.message.map((message, index) => (
              <p key={index} className="message">{message}</p>
            ))}
          </div>
          <div className="type-message-field">
            <input
              className="inputField"
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e)}
            />
            <div className="chat-input-icons-button">
              <div className="chat-input-field-icons-group">
                <div className="chat-input-field-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M80 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-1.07 48c-10.29 17.79-27.4 28-46.93 28s-36.63-10.2-46.92-28a8 8 0 1 1 13.84-8c7.47 12.91 19.21 20 33.08 20s25.61-7.1 33.07-20a8 8 0 0 1 13.86 8"
                    />
                  </svg>
                </div>
                <div className="chat-input-field-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m21 17l-3.293-3.293a1 1 0 0 0-1.414 0l-.586.586a1 1 0 0 1-1.414 0l-2.879-2.879a2 2 0 0 0-2.828 0L3 17M21 5v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1m-5 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                    />
                  </svg>
                </div>
                <div className="chat-input-field-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"
                    />
                  </svg>
                </div>
                <div className="chat-input-field-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="4"
                    >
                      <rect width="14" height="27" x="17" y="4" rx="7" />
                      <path
                        stroke-linecap="round"
                        d="M9 23c0 8.284 6.716 15 15 15c8.284 0 15-6.716 15-15M24 38v6"
                      />
                    </g>
                  </svg>
                </div>
                <div className="chat-input-field-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"
                    />
                  </svg>
                </div>
              </div>
              <button
                className="sendButton"
                onClick={() => handleClick(selectedChat)}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="initial-welcome-screen">
          <p className="initial-welcome-message">Start messaging by clicking on conversation</p>
        </div>
      )}
    </div>
  );
};

export default CurrentChat;
