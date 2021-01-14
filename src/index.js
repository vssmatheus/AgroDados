import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import authConfig from './auth/config';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDtnGhI0DQiD72NIS9GVs4XR1mSouHNeP0",
  authDomain: "agrodados-b96cd.firebaseapp.com",
  databaseURL: "https://agrodados-b96cd-default-rtdb.firebaseio.com",
  projectId: "agrodados-b96cd",
  storageBucket: "agrodados-b96cd.appspot.com",
  messagingSenderId: "309520588596",
  appId: "1:309520588596:web:19a5abb4c8b6adde474f61"
}

//authConfig();
firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
