
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBvP2Tk1KKWdoGhi4nfKfmEIM50_jG-f1k",
  authDomain: "tiktok---jornada-e3678.firebaseapp.com",
  projectId: "tiktok---jornada-e3678",
  storageBucket: "tiktok---jornada-e3678.appspot.com",
  messagingSenderId: "245650419292",
  appId: "1:245650419292:web:6a0b47678073f086278099"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 