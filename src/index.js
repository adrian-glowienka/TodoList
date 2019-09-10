import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDwNACs2iFu53xWQH-6A_1AiBR84MqjKJA",
    authDomain: "todo-ed379.firebaseapp.com",
    databaseURL: "https://todo-ed379.firebaseio.com",
    projectId: "todo-ed379",
    storageBucket: "",
    messagingSenderId: "1096651867270",
    appId: "1:1096651867270:web:97625ca848809ec275bd07"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
