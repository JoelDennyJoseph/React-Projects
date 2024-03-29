function SignOut({ auth }){
    return auth.currentUser && (
      <button onClick={() => auth.signOut()}>Sign Out</button>
    )
};

export default SignOut;