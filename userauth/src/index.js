import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: "AIzaSyCZWaNUqbDErQCEn-H_npf5WixUrwyTD9M",
    authDomain: "userauth-318d2.firebaseapp.com",
    projectId: "userauth-318d2",
    storageBucket: "userauth-318d2.appspot.com",
    messagingSenderId: "766798479550",
    appId: "1:766798479550:web:5f48d4187f58c105ee1eef"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);