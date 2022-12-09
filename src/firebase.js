import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6ibGinkcGc7OMPcdSKuHBLUIHZbfVJlo",
  authDomain: "web-app-assignment-85dc4.firebaseapp.com",
  projectId: "web-app-assignment-85dc4",
  storageBucket: "web-app-assignment-85dc4.appspot.com",
  messagingSenderId: "908983266530",
  appId: "1:908983266530:web:f300cd5c10467337c0c2bb",
  measurementId: "G-X6PCR10CQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app) 