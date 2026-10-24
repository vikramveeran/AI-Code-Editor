import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-code-editor-3b0b1.firebaseapp.com",
  projectId: "ai-code-editor-3b0b1",
  storageBucket: "ai-code-editor-3b0b1.firebasestorage.app",
  messagingSenderId: "700945149669",
  appId: "1:700945149669:web:7003f37da0f411baddae0c",
  measurementId: "G-Z02SDN53DG"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()