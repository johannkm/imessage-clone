import React from 'react';
import { Messages, Message } from 'framework7-react';

const Msg = ({ messages, getType }) => {
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
    <Messages>
      {messages.map((message, index) => (
        <Message
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
        </Message>
      ))}
    </Messages>
  );
};

export default Msg;
