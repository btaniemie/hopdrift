// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCMOor8RdS_Brp2PWy3Af0k737GQa0Wn0c',
  authDomain: "hopdrift-841fe.firebaseapp.com",
  projectId: "hopdrift-841fe",
  storageBucket: "hopdrift-841fe.appspot.com",
  messagingSenderId: "233895844758",
  appId: "1:233895844758:web:7b9f85117d36d001d0dbb7",
  measurementId: "G-BJV1DS92NE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);