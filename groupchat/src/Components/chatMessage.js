import firebase from "firebase/app";
import "firebase/firestore";

const auth = firebase.auth();

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

export default ChatMessage;