import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { getDatabase } from 'firebase/database';

// const {
//   VITE_API_KEY,
//   VITE_AUTH_DOMAIN,
//   VITE_DATABASE_URL,
//   VITE_PROJECT_ID,
//   VITE_STORAGE_BACKET,
//   VITE_MESSAGIN_SENDER_ID,
//   VITE_API_ID,
// } = import.meta.env;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BACKET,
  messagingSenderId: import.meta.env.VITE_MESSAGIN_SENDER_ID,
  appId: import.meta.env.VITE_API_ID,
};

console.log('firebaseConfig', firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const db = getDatabase();

export default auth;
