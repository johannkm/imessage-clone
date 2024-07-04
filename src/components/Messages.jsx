import React from 'react';

const Messages = ({ messages, getType, onClick, onTextClick, onNameClick, onAvatarClick }) => {
  return (
    <div className="messages">
      {messages.map((message, index) => (
        <div key={index} className={`message ${getType(message.uid)}`}>
          {/* Render each message */}
          <p>{message.text}</p>
          {/* Add other message details here */}
        </div>
      ))}
    </div>
  );
}

export default Messages;
