import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase';

function Profile() {
    const[email,setEmail] = useState('');
    const history = useHistory();
    
    const SignOut = async () => {
        await firebase.auth().signOut().then(() => {
            console.log("Sign Out success");
            history.goBack();
        }).catch((error) => {
            console.log(error);
        });
    }

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setEmail(user.email);
        } else {
            setEmail('');
        }
      });

    return (
        <div className='container'>
            <h1>Your Profile</h1>
            <h3>Name</h3>
            <h3>Age</h3>
            <h3>Address</h3>
            <h3>Email:{email}</h3>

            <button onClick={ ()=>{ SignOut() } }>
                SIGN OUT
            </button>
        </div>
    )
}

export default Profile