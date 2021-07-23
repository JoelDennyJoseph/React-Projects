import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState, useRef } from 'react';
import ChatMessage from "./chatMessage";

const auth = firebase.auth();
const firestore = firebase.firestore();

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

export default ChatRoom;