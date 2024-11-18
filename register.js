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
const db = firebase.firestore();

document.querySelector('.register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullName = document.querySelector('#fullName').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        await db.collection("users").doc(user.uid).set({
            fullName: fullName,
            email: email,
            createdAt: new Date()
        });

        alert('User registered successfully!');
        window.location.href = 'login.html'; 
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
});