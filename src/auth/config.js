import firebase from 'firebase';

const authConfig = () => {
    return firebase.initializeApp({
        apiKey: "AIzaSyDtnGhI0DQiD72NIS9GVs4XR1mSouHNeP0",
        authDomain: "agrodados-b96cd.firebaseapp.com",
        databaseURL: "https://agrodados-b96cd-default-rtdb.firebaseio.com",
        projectId: "agrodados-b96cd",
        storageBucket: "agrodados-b96cd.appspot.com",
        messagingSenderId: "309520588596",
        appId: "1:309520588596:web:19a5abb4c8b6adde474f61"
    });
}

export default authConfig;
