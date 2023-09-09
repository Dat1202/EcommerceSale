import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfB0mhMjtIzS7qLmJTqX05GQPupOtqL4Q",
  authDomain: "chat-app-845fe.firebaseapp.com",
  projectId: "chat-app-845fe",
  storageBucket: "chat-app-845fe.appspot.com",
  messagingSenderId: "388254253800",
  appId: "1:388254253800:web:0af98b86d5a2c41c183f5d",
  measurementId: "G-LLQC4YE5XB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
