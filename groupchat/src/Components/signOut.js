import firebase from "firebase/app";
import "firebase/auth";

const auth = firebase.auth();

function SignOut(){
    return auth.currentUser && (
      <button onClick={() => auth.signOut()}>Sign Out</button>
    )
};

export default SignOut;