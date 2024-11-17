import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSttI7K_H21RgkU-ZJ0hf0d_mgoipqKwg",
    authDomain: "kataloka-995bd.firebaseapp.com",
    projectId: "kataloka-995bd",
    storageBucket: "kataloka-995bd.firebasestorage.app",
    messagingSenderId: "989935904462",
    appId: "1:989935904462:web:1f7d64db97686afd7cd29f",
    measurementId: "G-0X8CY7D8EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function resetQuiz() {
    const user = auth.currentUser;
    if (!user) {
        console.error("User is not authenticated. Cannot reset quiz.");
        return;
    }

    const userId = user.uid;
    const progressRef = doc(db, "users", userId, "quizProgress", "progress");

    try {
        // Hapus atau reset data dari Firestore
        await setDoc(progressRef, {
            currentQuestionIndex: 0,
            answers: new Array(10).fill(""), // Kosongkan semua jawaban
            progress: "0%" // Reset progres ke 0%
        });

        // Reset variabel lokal
        currentQuestionIndex = 0;
        answers = new Array(10).fill("");

        // Reset UI
        displayNumbers(); // Tampilkan nomor soal kosong
        displayQuestion(0); // Mulai dari pertanyaan pertama
        updateProgressBar(); // Reset progress bar

        console.log("Quiz has been reset.");
    } catch (error) {
        console.error("Error resetting quiz:", error);
    }
}

function hideScorePopup() {
    const popup = document.getElementById("score-popup");
    popup.classList.add("hidden"); // Sembunyikan pop-up
}

async function calculateFinalScore() {
    const user = auth.currentUser;
    if (!user) {
        console.error("User is not authenticated. Cannot calculate score.");
        return null;
    }

    const userId = user.uid;
    const progressRef = doc(db, "users", userId, "quizProgress", "result");

    try {
        const docSnap = await getDoc(progressRef);
        if (docSnap.exists()) {
            const progressData = docSnap.data();

            const score = progressData.finalScore;
            const total = progressData.totalQuestions;

            console.log(`Final Score: ${score}/${total}`);
            return `Skor: ${score}/${total}`;
        } else {
            console.log("No quiz progress data found for the user.");
            return 0;
        }
    } catch (error) {
        console.error("Error calculating final score:", error);
        return 0;
    }
}

function showScorePopup(score) {
    const popup = document.getElementById("score-popup");
    const scoreDisplay = document.getElementById("score-display");

    // Set skor di elemen pop-up
    scoreDisplay.textContent = score;

    // Tampilkan pop-up
    popup.classList.remove("hidden");
}

document.getElementById("next-page-button").addEventListener("click", () => {
    console.log("CASLLLEDASDASD")
    window.location.href = "home.html";
});
document.getElementById("reset-quiz-button").addEventListener("click", async () => {
    console.log("CASLLLED")
    await resetQuiz();
    window.location.href = "cerdas-bersama.html";
});
// Event listener untuk tombol "Lihat Nilai"
document.getElementById("view-score-button").addEventListener("click", async () => {
    hideScorePopup(); // Sembunyikan pop-up
    const finalScore = await calculateFinalScore(); // Hitung skor akhir
    showScorePopup(finalScore); // Tampilkan pop-up skor
});
document.getElementById("close-score-popup").addEventListener("click", () => {
    console.log("HELLO")
    document.getElementById("score-popup").classList.add("hidden")
})