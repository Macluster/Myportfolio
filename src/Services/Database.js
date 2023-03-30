import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA42_u7ugUAQxfSyD3_a5AmIEyt1TQcm4s",
  authDomain: "portfolio-653f6.firebaseapp.com",
  projectId: "portfolio-653f6",
  storageBucket: "portfolio-653f6.appspot.com",
  messagingSenderId: "948504949250",
  appId: "1:948504949250:web:b25ef6994e295c52582d1b",
  measurementId: "G-V7GV2T033W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const FireData=getDatabase(app);
export default  FireData;
