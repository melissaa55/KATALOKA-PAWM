// Import Firebase Auth functions
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const auth = getAuth();

document.querySelector('.login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Login successful!');
            window.location.href = '/beranda.html'; // Redirect after successful login
        })
        .catch((error) => {
            console.error(error);
            alert(error.message);
        });
});
