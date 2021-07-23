import './App.css';
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import SignIn from './Components/signIn';
import SignOut from './Components/signOut';
import ChatRoom from './Components/chatRoom';

firebase.initializeApp({
  apiKey: "AIzaSyAWAvudMvkQ11N6l1zazFpuq6V9zdo0H8Y",
  authDomain: "flashchat-d095d.firebaseapp.com",
  projectId: "flashchat-d095d",
  storageBucket: "flashchat-d095d.appspot.com",
  messagingSenderId: "1024219855918",
  appId: "1:1024219855918:web:deceab3cdbd9d5f2f733bf"
});

const auth = firebase.auth();

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