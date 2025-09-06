import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
//import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJL_NKmH64DcIwGQrm7iboKj2hWCdFfqU",
  authDomain: "authentication-c2ad5.firebaseapp.com",
  projectId: "authentication-c2ad5",
  storageBucket: "authentication-c2ad5.firebasestorage.app",
  messagingSenderId: "630973748364",
  appId: "1:630973748364:web:fbb7885e7a0637efb097a9",
  measurementId: "G-PYHP81NDD0"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
//export const db = getFirestore(app); // ✅ Add Firestore

// googleProvider.setCustomParameters({
//   prompt: 'select_account'
// });

export default app;