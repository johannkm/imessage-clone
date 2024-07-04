import React, { useState } from 'react';

const MessageBar = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim().length === 0) return;
    onSubmit(text);
    setText('');
  }

  return (
    <div className="message-bar">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default MessageBar;
