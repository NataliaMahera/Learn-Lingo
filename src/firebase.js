import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BACKET,
  VITE_MESSAGIN_SENDER_ID,
  VITE_API_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BACKET,
  messagingSenderId: VITE_MESSAGIN_SENDER_ID,
  appId: VITE_API_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
