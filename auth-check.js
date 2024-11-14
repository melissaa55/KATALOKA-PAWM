// Firebase configuration (replace with your actual Firebase config)
const firebaseConfig = {
    apiKey: "AIzaSyCSttI7K_H21RgkU-ZJ0hf0d_mgoipqKwg",
    authDomain: "kataloka-995bd.firebaseapp.com",
    projectId: "kataloka-995bd",
    storageBucket: "kataloka-995bd.firebasestorage.app",
    messagingSenderId: "989935904462",
    appId: "1:989935904462:web:1f7d64db97686afd7cd29f",
    measurementId: "G-0X8CY7D8EM"
};


    // Inisialisasi Firebase
const app = firebase.initializeApp(firebaseConfig);
console.log("Firebase initialized:", app);  // Tambahkan log ini untuk melihat apakah Firebase terinisialisasi

const auth = firebase.auth();

    // Deteksi status login dan ubah tombol
auth.onAuthStateChanged((user) => {
    console.log("onAuthStateChanged triggered");  // Tambahkan log ini untuk memastikan fungsi ini dipanggil
    const loginButton = document.getElementById("login-button");

    if (!loginButton) {
        console.log("Tombol login tidak ditemukan di DOM");  // Log ini membantu melihat apakah tombol ada
        return;
        }

    if (user) {
        console.log("User logged in:", user);  // Log ini akan menunjukkan data pengguna jika login berhasil
        loginButton.textContent = "Profil";
        loginButton.href = "/profile.html"; // Mengarahkan ke halaman profil
    } else {
        console.log("No user logged in");  // Log ini akan muncul jika tidak ada pengguna yang login
        loginButton.textContent = "Masuk";
        loginButton.href = "/login.html";
    }
    });
