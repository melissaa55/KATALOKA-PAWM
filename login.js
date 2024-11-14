// Import Firebase Auth functions
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase only if it hasn't been initialized
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCSttI7K_H21RgkU-ZJ0hf0d_mgoipqKwg",
        authDomain: "kataloka-995bd.firebaseapp.com",
        projectId: "kataloka-995bd",
        storageBucket: "kataloka-995bd.firebasestorage.app",
        messagingSenderId: "989935904462",
        appId: "1:989935904462:web:1f7d64db97686afd7cd29f",
        measurementId: "G-0X8CY7D8EM"
    });
}

const auth = firebase.auth();

document.querySelector('.login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Login successful!');
            window.location.href = '/index.html'; // Redirect after successful login
        })
        .catch((error) => {
            console.error(error);
            alert(error.message);
        });
});

