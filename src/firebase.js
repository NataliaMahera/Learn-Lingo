import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const {
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BACKET,
  VITE_MESSAGIN_SENDER_ID,
  VITE_API_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: 'AIzaSyB27k5q4hCUt97rf8cKwbDVqFgq7wjS9o4',
  authDomain: VITE_AUTH_DOMAIN,
  databaseURL:
    'https://learnlingoauth-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BACKET,
  messagingSenderId: VITE_MESSAGIN_SENDER_ID,
  appId: VITE_API_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const db = getDatabase();

export default auth;
