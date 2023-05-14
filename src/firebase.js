import { initializeApp } from 'firebase/app';
import { getDatabase,ref } from 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
    databaseURL: "https://zado-48f38-default-rtdb.firebaseio.com/"
  };

  initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);
  export const dbref = ref;