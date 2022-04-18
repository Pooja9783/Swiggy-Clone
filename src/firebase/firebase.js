import { useState, useEffect } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk6Ckqf9q91CUgOhyYStpK9bGNM8fN4KM",
  authDomain: "swiggy-clone-auth.firebaseapp.com",
  projectId: "swiggy-clone-auth",
  storageBucket: "swiggy-clone-auth.appspot.com",
  messagingSenderId: "32654081680",
  appId: "1:32654081680:web:1ac03964c1343ce7be6215",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function login(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function signup(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function logout() {
  return signOut(auth);
}

//custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
