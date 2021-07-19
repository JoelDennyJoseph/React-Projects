import './App.css';
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
    <button onClick={ signInWithGoogle } >Sign In with Google</button>
  )
};

function SignOut(){
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function App() {
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <header>

      </header>

      <section>
        { user ? <ChatRoom /> : <SignIn /> }
      </section>
    </div>
  );
}

export default App;
