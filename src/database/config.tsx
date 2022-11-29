import { initializeApp, getApp } from "firebase/app";
import { getAuth, PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { 
  getFirestore,
  doc, setDoc,
  collection, getDoc,
  query, where, getDocs,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  // add firebase config
  // apiKey: "AIzaSyCwhzVvl4BvUMLY9i_p4pVJJNQOvwsX1Ik",
  // authDomain: "g-go-237.firebaseapp.com",
  // projectId: "g-go-237",
  // storageBucket: "g-go-237.appspot.com",
  // messagingSenderId: "874207934903",
  // appId: "1:874207934903:web:7d4e71352f56e2ce589032",
  // measurementId: "G-0DEPY7MMJF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const appAuth = getApp();
const auth = getAuth(appAuth);

export {
  db, 
  appAuth,
  auth,
  PhoneAuthProvider, 
  signInWithCredential,
  doc, setDoc, collection, getDoc,
  query, where, getDocs,
  updateDoc,
  getStorage, ref, uploadBytesResumable,
  getDownloadURL
};
