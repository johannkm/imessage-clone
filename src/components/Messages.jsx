import React from 'react';
import { Messages as F7Messages, Message as F7Message } from 'framework7-react';

const Messages = ({ messages, getType }) => {
  const isFirstMessage = (message, index) => {
    const previousMessage = messages[index - 1];
    if (!previousMessage || previousMessage.type !== message.type || previousMessage.name !== message.name)
      return true;
    return false;
  };

  const isLastMessage = (message, index) => {
    const nextMessage = messages[index + 1];
    if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name)
      return true;
    return false;
  };

  const isTailMessage = (message, index) => {
    const nextMessage = messages[index + 1];
    if (!nextMessage || nextMessage.type !== message.type || nextMessage.name !== message.name)
      return true;
    return false;
  };

  return (
    <F7Messages>
      {messages.map((message, index) => (
        <F7Message
          key={message.key || index}
          type={getType(message.uid)}
          name={message.name}
          avatar={message.avatar}
          first={isFirstMessage(message, index)}
          last={isLastMessage(message, index)}
          tail={isTailMessage(message, index)}
        >
          {message.text && <span slot="text">{message.text}</span>}
          {message.avatar && <img slot="avatar" src={message.avatar} alt="Avatar" />}
        </F7Message>
      ))}
    </F7Messages>
  );
};

export default Messages;
