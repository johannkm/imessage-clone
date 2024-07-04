import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { f7 } from 'framework7-react';
import Navbar from './components/Navbar';
import LeftPanel from './components/LeftPanel';
import Messages from './components/Messages';
import MessageBar from './components/MessageBar';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

const App = () => {
  const [name, setName] = useState('anon');
  const [auth, setAuth] = useState(false);
  const [uid, setUid] = useState('none');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    firebase.auth().signInAnonymously().catch((error) => {
      console.error(error.code, error.message);
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const isAnonymous = user.isAnonymous;
        setUid(user.uid);
        if (!isAnonymous) {
          setName(user.displayName.split(' ')[0]);
          setAuth(true);
        }
      } else {
        console.log('signed out');
      }
    });

    const messagesRef = db.ref('/messages');
    messagesRef.on('value', (snapshot) => {
      const messagesData = snapshot.val();
      const messagesArray = [];
      for (let message in messagesData) {
        messagesArray.push({
          ...messagesData[message],
          key: message
        });
      }
      setMessages(messagesArray);
    });

    return () => {
      messagesRef.off();
    };
  }, []);

  const handleSubmitMessage = (text) => {
    if (text.trim().length === 0) return;
    const newMsg = {
      name: name,
      uid: uid,
      text: text,
      date: new Date().toLocaleTimeString()
    };
    db.ref('/messages').push(newMsg);
  };

  const getType = (messageUid) => {
    return messageUid === uid ? 'sent' : 'received';
  };

  const signIn = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
      // Handle successful sign-in
    }).catch((error) => {
      // Handle sign-in error
      console.error(error.code, error.message);
    });
  };

  const handleOpenPanel = () => {
    f7.panel.open('left');
  };

  return (
    <div id="app">
      <Statusbar />
      <LeftPanel theme="dark" name={name} auth={auth} signIn={signIn} />
      <div id="main-view">
        <Navbar theme="ios" onOpenPanel={handleOpenPanel} />
        <Messages messages={messages} getType={getType} />
        <MessageBar onSubmit={handleSubmitMessage} />
      </div>
    </div>
  );
};

export default App;
