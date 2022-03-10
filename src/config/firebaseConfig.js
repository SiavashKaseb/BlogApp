// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMjQ0nTc6Q9IWC7RFJKhfWCU9x8R92mY4",
  authDomain: "blogapp-67d29.firebaseapp.com",
  projectId: "blogapp-67d29",
  storageBucket: "blogapp-67d29.appspot.com",
  messagingSenderId: "950633444564",
  appId: "1:950633444564:web:50613660b22dcefed83741",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
