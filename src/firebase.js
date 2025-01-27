import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaoBULNogjXE7iO9oBucmRRnMCkFdFY8w",
  authDomain: "myamaranoc.firebaseapp.com",
  projectId: "myamaranoc",
  storageBucket: "myamaranoc.firebasestorage.app",
  messagingSenderId: "862210045731",
  appId: "1:862210045731:web:7ff3fa8b37fab2f037fe96",
  measurementId: "G-Z8Y5JRKHE5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };