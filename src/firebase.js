import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwSppFsIw7psNEZu8uT5gnBOcNo7jXDWU",
  authDomain: "mst-registration.firebaseapp.com",
  projectId: "mst-registration",
  storageBucket: "mst-registration.firebasestorage.app",
  messagingSenderId: "189153381189",
  appId: "1:189153381189:web:9e4cd0297d5a46d0a10c2c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { RecaptchaVerifier, signInWithPhoneNumber };