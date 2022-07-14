import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCUuRJsjeQO-BS0xosNVebtIS0eVgUK9rE",
  authDomain: "facility-reservations-e689e.firebaseapp.com",
  projectId: "facility-reservations-e689e",
  storageBucket: "facility-reservations-e689e.appspot.com",
  messagingSenderId: "86006981981",
  appId: "1:86006981981:web:a75da60cb52ea9c067b4b4"
};
  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const topicRef = getDocs(collection(db, 'topics'))