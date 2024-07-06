import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getStorage } from 'firebase/storage';
import { getDatabase } from "firebase/database";
// FromFirestoreDatabase:
// import { getFirestore } from 'firebase/firestore';

const apiKeyData = import.meta.env.API_KEY;

const firebaseConfig = {
  apiKey: apiKeyData,
  authDomain: "learnlingo-64672.firebaseapp.com",
  databaseURL: "https://learnlingo-64672-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnlingo-64672",
  storageBucket: "learnlingo-64672.appspot.com",
  messagingSenderId: "399278654167",
  appId: "1:399278654167:web:53da9baa2bb72590ca2692",
  measurementId: "G-T38W7TZNW9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// export const database = getFirestore(app);
// export const storage = getStorage(app);

export const db = getDatabase(app);