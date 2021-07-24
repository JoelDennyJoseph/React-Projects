import firebase from "firebase/app";

function SignIn({auth}) {
    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };

    return (
        <button className='sign-in' onClick={ signInWithGoogle } >Sign In with Google</button>
    )
};

export default SignIn;