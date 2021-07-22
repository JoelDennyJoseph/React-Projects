import './App.css';
import { useState, useRef } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAWAvudMvkQ11N6l1zazFpuq6V9zdo0H8Y",
  authDomain: "flashchat-d095d.firebaseapp.com",
  projectId: "flashchat-d095d",
  storageBucket: "flashchat-d095d.appspot.com",
  messagingSenderId: "1024219855918",
  appId: "1:1024219855918:web:deceab3cdbd9d5f2f733bf"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function SignIn() {
  function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <button className='sign-in' onClick={ signInWithGoogle } >Sign In with Google</button>
  )
};

function SignOut(){
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom(){
  const messageRef = firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);

  const [messages] =useCollectionData(query, {idField: 'id'});
  const [formValue, setFormValue] = useState('');

  const dummy = useRef();

  const sendMessage = async(e) => {
    e.preventDefault();

    const {uid, email} = auth.currentUser;
    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      email,
    });
    
    setFormValue('');
    dummy.current.scrollIntoView({behaviour: 'smooth'});
  }

  return(
    <>
      <div>
        { messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />) }
        
        <div ref={dummy}></div>
      </div>

      <form onSubmit={sendMessage} >
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
        <button type='submit'>|^|</button>
      </form>
    </>
  )
}

function ChatMessage(props){
  const { text, uid, email } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved';

  return(
    <div className={`message ${messageClass}`}>
      <p>{email}</p>
      <p>{text}</p>
    </div>
  )
}

function App() {
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <header>
        <h1>ChatRoom</h1>
        <SignOut /> 
      </header>

      <section>
        { user ? <ChatRoom /> : <SignIn /> }
      </section>
    </div>
  );
}

export default App;
