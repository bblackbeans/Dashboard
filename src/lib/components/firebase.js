import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC9n4jFP-39QgjBkXbikQxIQNxUKbGNo6A",
  authDomain: "autenticacaodashboard-406717.firebaseapp.com",
  projectId: "autenticacaodashboard-406717",
  storageBucket: "autenticacaodashboard-406717.appspot.com",
  messagingSenderId: "186684128155",
  appId: "1:186684128155:web:e0aa30b1db77861c3c3f3e"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };