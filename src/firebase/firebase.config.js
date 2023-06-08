// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_BISTRO_APIKEY,
  authDomain: import.meta.env.VITE_BISTRO_AUTHDOMAIN,
  projectId: import.meta.env.VITE_BISTRO_PROJECTID,
  storageBucket: import.meta.env.VITE_BISTRO_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_BISTRO_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_BISTRO_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;