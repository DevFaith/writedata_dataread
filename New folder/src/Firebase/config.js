import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7k5i9PGwQl3o3Puwbt60qkOXDymYAoyM",
  authDomain: "vitehostingweb.firebaseapp.com",
  projectId: "vitehostingweb",
  storageBucket: "vitehostingweb.appspot.com",
  messagingSenderId: "726495371724",
  appId: "1:726495371724:web:4d173e73872fcc6cf57d69",
  measurementId: "G-7TG7RXVYHB",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
