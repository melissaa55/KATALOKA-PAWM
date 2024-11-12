// Import Firebase Auth and Firestore functions
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Initialize Firebase Auth and Firestore
const auth = getAuth();
const db = getFirestore();

document.querySelector('.login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form values
    const fullName = document.querySelector('#fullName').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save the full name in Firestore
        await setDoc(doc(db, "users", user.uid), {
            fullName: fullName,
            email: email,
            createdAt: new Date()
        });

        alert('User registered successfully!');
        window.location.href = 'login.html'; // Redirect to login page
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
});
