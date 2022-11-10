import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCmKjjuGNim-PQetLQi-7c8a6cPLqK7Uqw",
  authDomain: "wellyadvisor-with-redux.firebaseapp.com",
  projectId: "wellyadvisor-with-redux",
  storageBucket: "wellyadvisor-with-redux.appspot.com",
  messagingSenderId: "58837443050",
  appId: "1:58837443050:web:7bd97c0efc71cec8f29293"
})


export const db = getFirestore(firebaseApp)

