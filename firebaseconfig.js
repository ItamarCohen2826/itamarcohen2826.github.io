// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfXn7MNOxeosQNYHH28fM2ZQ8HEO884O8",
  authDomain: "lifeonmars-251e6.firebaseapp.com",
  projectId: "lifeonmars-251e6",
  storageBucket: "lifeonmars-251e6.appspot.com",
  messagingSenderId: "368140676898",
  appId: "1:368140676898:web:4b0803e8dea43bb27fbf7b",
  measurementId: "G-0F0YM9EBJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);