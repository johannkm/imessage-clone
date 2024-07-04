import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import Navbar from './Navbar';
import Statusbar from './Statusbar';
import LeftPanel from './LeftPanel';
import Messages from './Messages';
import MessageBar from './MessageBar';

const firebaseConfig = {
  // Your Firebase config here
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();

const App = () => {
  const [name, setName] = useState('anon');
  const [auth, setAuth] = useState(false);
  const [uid, setUid] = useState('none');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    firebase.auth().signInAnonymously().catch((error) => {
      console.error(error.code + error.message);
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const isAnonymous = user.isAnonymous;
        setUid(user.uid);
        console.log(user.uid);
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

  const getType = (uid) => {
    return uid === uid ? 'sent' : 'received';
  };

  const signIn = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
      // Handle successful sign-in
    }).catch((error) => {
      // Handle sign-in error
      console.error(error.code + error.message);
    });
  };

  const handleOpenPanel = () => {
    // Open left panel logic
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
}

export default App;
