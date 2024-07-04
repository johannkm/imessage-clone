// MainView.jsx
import React from 'react';
import { View, Navbar, NavLeft, Link, Pages, Page, Messages, Messagebar } from 'framework7-react';
import Message from './Message';

const MainView = ({ messages, onSubmit, getType, onClick, onTextClick, onNameClick, onAvatarClick }) => (
  <View id="main-view" navbarThrough dynamicNavbar main>
    <Navbar>
      <NavLeft>
        <Link icon="bars" openPanel="left" />
      </NavLeft>
      <div className="title sliding">Messages</div>
    </Navbar>
    <Pages>
      <Page>
        <Navbar>
          <NavLeft>
            <Link icon="bars" openPanel="left" />
          </NavLeft>
          <div className="title sliding">Messages</div>
        </Navbar>
        <Messages>
          {messages.map((message, index) => (
            <Message
              key={index}
              text={message.text}
              label={message.label}
              date={message.date}
              name={message.name}
              avatar={message.avatar}
              type={getType(message.uid)}
              day={message.day}
              time={message.time}
              onClick={onClick}
              onTextClick={onTextClick}
              onNameClick={onNameClick}
              onAvatarClick={onAvatarClick}
            />
          ))}
        </Messages>
        <Messagebar placeholder="Message" sendLink="Send" onSubmit={onSubmit} />
      </Page>
    </Pages>
  </View>
);

export default MainView;
