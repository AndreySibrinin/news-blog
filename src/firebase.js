import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
   /*
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_APP_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_APP_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
*/
    apiKey: "AIzaSyD7-jfORPtqq5g3idZE7zh-8SI7tTcW29Y",
    authDomain: "news-blog-56fe0.firebaseapp.com",
    projectId: "news-blog-56fe0",
    storageBucket: "news-blog-56fe0.appspot.com",
    messagingSenderId: "557792861534",
    appId: "1:557792861534:web:8150130b2e2d98f54d43cf",
    databaseURL: "https://news-blog-56fe0-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);