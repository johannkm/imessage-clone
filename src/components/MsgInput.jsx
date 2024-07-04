import React, { useState } from 'react';
import { Messagebar, Link } from 'framework7-react';

const MsgInput = ({ onSubmit }) => {
  const [messageText, setMessageText] = useState('');

  const handleSubmit = () => {
    if (messageText.trim().length === 0) return;
    onSubmit(messageText);
    setMessageText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <Messagebar
      placeholder="Type your message..."
      value={messageText}
      onInput={(e) => setMessageText(e.target.value)}
      onKeyPress={handleKeyPress}
    >
      <Link
        iconIos="f7:arrow_up_circle_fill"
        iconMd="material:send"
        slot="inner-end"
        onClick={handleSubmit}
      />
    </Messagebar>
  );
}

export default MsgInput;
