import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC012k0aq40dckYOZG2e_uHqMUZrhLpyJ0",
  authDomain: "ecommercemdv-ae19f.firebaseapp.com",
  projectId: "ecommercemdv-ae19f",
  storageBucket: "ecommercemdv-ae19f.appspot.com",
  messagingSenderId: "264551857504",
  appId: "1:264551857504:web:1d1798f8c3dd2e46f3b205"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);