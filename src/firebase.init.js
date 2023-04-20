// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8QoXhknPReVwNwj0ANORmQwr1kNZva7U",
  authDomain: "twitter-clone-ec8c4.firebaseapp.com",
  projectId: "twitter-clone-ec8c4",
  storageBucket: "twitter-clone-ec8c4.appspot.com",
  messagingSenderId: "672184859056",
  appId: "1:672184859056:web:210cc6b52d5711c3f17e75",
  measurementId: "G-01KWJLDPJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


