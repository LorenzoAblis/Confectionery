import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBOvmOR3RdrMix47wcKHFGGkia115H0THI",
  authDomain: "confectionery-1cbc2.firebaseapp.com",
  projectId: "confectionery-1cbc2",
  storageBucket: "confectionery-1cbc2.appspot.com",
  messagingSenderId: "157997870682",
  appId: "1:157997870682:web:1bbd3a07ffbf5ed734f263"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);