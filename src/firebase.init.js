// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXUBvFs4B81TKZf8hLVsR4qF94HcozDtI",
    authDomain: "genius-car-services-85320.firebaseapp.com",
    projectId: "genius-car-services-85320",
    storageBucket: "genius-car-services-85320.appspot.com",
    messagingSenderId: "870465955766",
    appId: "1:870465955766:web:64709d76b502cdf12e0317"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;