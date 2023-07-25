import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBqPYt3Xqq9pP3g5vX_BMkPJvuEK48h9L8",
    authDomain: "foodordering-aa83f.firebaseapp.com",
    databaseURL: "https://foodordering-aa83f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "foodordering-aa83f",
    storageBucket: "foodordering-aa83f.appspot.com",
    messagingSenderId: "419540594478",
    appId: "1:419540594478:web:e6d28b2eedab11cd8914bf"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)


  export    {app, firestore, storage};