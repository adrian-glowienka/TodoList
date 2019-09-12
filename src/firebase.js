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

  const { database } = firebase;
  const db = database();

  export const todoRef = db.ref('/todos') 