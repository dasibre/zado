import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//import { getAuth } from 'firebase/auth'; // If using Authentication
import { getDatabase, onValue, get,  ref, query, orderByChild, equalTo, limitToFirst, orderByKey } from 'firebase/database'; // If using Realtime Database
//import { getStorage } from 'firebase/storage'; // If using Firebase Storage

const firebaseConfig = {
    apiKey: "AIzaSyC0PyngA6tZhuNunlWNIetFnr1WGJlHXU4",
    authDomain: "zado-48f38.firebaseapp.com",
    databaseURL: "https://zado-48f38-default-rtdb.firebaseio.com",
    projectId: "zado-48f38",
    storageBucket: "zado-48f38.appspot.com",
    messagingSenderId: "883365761632",
    appId: "1:883365761632:web:502ce38e285716f7d72905",
    measurementId: "G-V4457GYJ0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
// const auth = getAuth(app);
const database = getDatabase(app);
// const storage = getStorage(app);

// Export Firebase modules
// export { auth, firestore, database, storage };
export { firestore, database, ref, get, query, orderByChild, equalTo, onValue, collection, getDocs, limitToFirst, orderByKey };