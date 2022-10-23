// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjH_dHXh_Zi1PnfJQ_LQhRZx5LmBTiEyM",
  authDomain: "travel-guru-fc3d0.firebaseapp.com",
  projectId: "travel-guru-fc3d0",
  storageBucket: "travel-guru-fc3d0.appspot.com",
  messagingSenderId: "737810762861",
  appId: "1:737810762861:web:f4cf2d740945ca15460364"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;