import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "learnlingo-3e3a7.firebaseapp.com",
  projectId: "learnlingo-3e3a7",
  storageBucket: "learnlingo-3e3a7.appspot.com",
  messagingSenderId: "687111542865",
  appId: "1:687111542865:web:45449fbf28879617acc070",
};

const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
