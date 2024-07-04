// Message.jsx
import React from 'react';
import { Message as F7Message } from 'framework7-react';

const Message = ({ text, label, date, name, avatar, type, day, time, onClick, onTextClick, onNameClick, onAvatarClick }) => (
  <F7Message
    text={text}
    label={label}
    date={date}
    name={name}
    avatar={avatar}
    type={type}
    day={day}
    time={time}
    onClick={onClick}
    onClickText={onTextClick}
    onClickName={onNameClick}
    onClickAvatar={onAvatarClick}
  />
);

export default Message;
