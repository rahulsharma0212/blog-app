// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: 'blog-app-398606.firebaseapp.com',
    projectId: 'blog-app-398606',
    storageBucket: 'blog-app-398606.appspot.com',
    messagingSenderId: '592727495846',
    appId: '1:592727495846:web:0485085d7272a5306f1067',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
