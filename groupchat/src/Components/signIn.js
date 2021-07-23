import firebase from "firebase/app";
import "firebase/auth";

const auth = firebase.auth();

function SignIn() {
    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };

    return (
        <button className='sign-in' onClick={ signInWithGoogle } >Sign In with Google</button>
    )
};

export default SignIn;