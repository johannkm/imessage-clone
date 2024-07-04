// App.jsx
import React, { useState, useEffect } from 'react';
import 'framework7/css/framework7.bundle.min.css';
import { App as Framework7App, Statusbar } from 'framework7-react';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import LeftPanel from './LeftPanel';
import MainView from './MainView';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  databaseURL: "your_database_url",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_messaging_sender_id"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const App = () => {
  const [name, setName] = useState('anon');
  const [uid, setUid] = useState('none');
  const [auth, setAuth] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Anonymous authentication
    firebase.auth().signInAnonymously().catch((error) => {
      console.error('Error signing in anonymously:', error.code, error.message);
    });

    // Authentication state change listener
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUid(user.uid);
        if (!user.isAnonymous) {
          setName(user.displayName.split(' ')[0]);
          setAuth(true);
        }
      } else {
        // User is signed out
        console.log('Signed out');
      }
    });
  }, []); // Empty dependency array ensures this effect runs only once

  const onClick = (event) => {
    console.log('Message click');
    console.log(uid);
  };

  const onAvatarClick = () => {
    console.log('Avatar click');
  };

  const onTextClick = () => {
    console.log('Text click');
  };

  const onNameClick = () => {
    console.log('Name click');
  };

  const onSubmit = (text, clear) => {
    if (text.trim().length === 0) return;
    const newMsg = {
      name: name,
      uid: uid,
      text: text,
      date: (() => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        return hours + ':' + minutes;
      })()
    };
    db.ref('/messages').push(newMsg);
    // Clear Message Bar
    clear();
  };

  const getType = (msgUid) => {
    return msgUid === uid ? 'sent' : 'received';
  };

  const signIn = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch((error) => {
      console.error('Google sign in error:', error.code, error.message);
    });
  };

  return (
    <Framework7App>
      <Statusbar />
      <LeftPanel name={name} auth={auth} signIn={signIn} />
      <MainView
        messages={messages}
        onSubmit={onSubmit}
        getType={getType}
        onClick={onClick}
        onTextClick={onTextClick}
        onNameClick={onNameClick}
        onAvatarClick={onAvatarClick}
      />
    </Framework7App>
  );
};

export default App;
