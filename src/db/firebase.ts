import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyB8MyJvHkAXPloxWRQTgIkTESaVnvsg4yw',
  authDomain: 'todo-db-16f9c.firebaseapp.com',
  projectId: 'todo-db-16f9c',
  storageBucket: 'todo-db-16f9c.appspot.com',
  messagingSenderId: '279660620304',
  appId: '1:279660620304:web:92e8a31d3ef7abec84f895',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
