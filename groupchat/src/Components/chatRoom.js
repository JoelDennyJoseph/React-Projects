import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState, useRef, useEffect } from 'react';
import ChatMessage from "./chatMessage";

function ChatRoom({ auth, firestore }){
    const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);
  
    const [messages] =useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState('');
  
    const dummy = useRef();
  
    const sendMessage = async(e) => {
      e.preventDefault();
      if(!formValue){
        return;
      }
  
      const {uid, photoURL} = auth.currentUser;
      await messageRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
      });
      
      setFormValue('');
    }
    
    useEffect(() => {
      dummy.current.scrollIntoView({behaviour: 'smooth'});
    },[messages]);

    return(
      <>
        <main>
          <div className='container'>
            { messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} auth={auth}/>) }      
            <div ref={dummy}></div>
          </div>
        </main>
  
        <form onSubmit={sendMessage} >
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
          <button type='submit'>🕊️</button>
        </form>
      </>
    )
}

export default ChatRoom;