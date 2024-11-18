import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCSttI7K_H21RgkU-ZJ0hf0d_mgoipqKwg",
    authDomain: "kataloka-995bd.firebaseapp.com",
    projectId: "kataloka-995bd",
    storageBucket: "kataloka-995bd.firebasestorage.app",
    messagingSenderId: "989935904462",
    appId: "1:989935904462:web:1f7d64db97686afd7cd29f",
    measurementId: "G-0X8CY7D8EM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
    auth.onAuthStateChanged(user => {
        if (user) {
            firestore.collection("users").doc(user.uid).collection("quizProgress")
                .doc("progress")
                .get()
                .then(doc => {
                    if (doc.exists) {
                        const data = doc.data();
                        currentQuestionIndex = data.currentQuestion || 0;
                        answersnswers = data.selectedAnswers || {};
                        document.getElementById('progress').style.width = data.progress || '0%';
                        if (currentQuestionIndex === 4 && typeof answers[currentQuestionIndex + 1] !== "undefined") {
                            displayQuestion(5);
                        } else {
                            displayQuestion(currentQuestionIndex);
                        }

                    }
                })
                .catch(error => {
                    console.error("Error fetching state:", error);
                    loadQuestion(currentQuestionIndex);
                });
        } else {
            window.location.href = "login.html";
        }
    });
});
const questions = [
    {
        question: "Manakah penulisan kata yang sesuai dengan EYD?",
        answers: [
            "Memperhatikan",
            "Memperhatikan",
            "Memperhatikkan",
            "Memperhati-kan",
            "Memper-hatikan"
        ],
        correctAnswer: "Memperhatikan"
    },
    {
        question: "Apa yang dimaksud dengan ejaan yang benar?",
        answers: [
            "Pengucapan kata sesuai aturan tata bahasa",
            "Cara penulisan huruf kapital dalam kalimat",
            "Penulisan kata sesuai dengan pedoman ejaan",
            "Aturan dalam menulis artikel ilmiah",
            "Penggunaan tanda baca di akhir kalimat"
        ],
        correctAnswer: "Penulisan kata sesuai dengan pedoman ejaan"
    },
    {
        question: "Manakah dari pilihan berikut yang merupakan kalimat efektif?",
        answers: [
            "Andi membeli buku untuk membaca novel.",
            "Ibu memasak di dapur dengan api kecil.",
            "Ani pergi ke pasar untuk membeli sayur segar.",
            "Kucing itu sedang tidur dan bermain di halaman.",
            "Andi dan Ani ke sekolah setelah makan."
        ],
        correctAnswer: "Ani pergi ke pasar untuk membeli sayur segar."
    },
    {
        question: "Penulisan mana yang benar terkait penggunaan huruf kapital?",
        answers: [
            "Ibu pergi ke pasar.",
            "ibu Pergi ke pasar.",
            "Ibu Pergi Ke pasar.",
            "Ibu pergi Ke pasar.",
            "ibu pergi ke Pasar."
        ],
        correctAnswer: "Ibu pergi ke pasar."
    },
    {
        question: "Kata yang sesuai dengan kaidah bahasa baku adalah...",
        answers: [
            "Aktifitas",
            "Faksimile",
            "Akte",
            "Survey",
            "Sekedar"
        ],
        correctAnswer: "Faksimile"
    },
    {
        question: "Manakah contoh penggunaan tanda baca yang tepat?",
        answers: [
            "Andi membeli buku, pensil, dan penghapus.",
            "Andi membeli buku pensil dan, penghapus.",
            "Andi membeli, buku pensil dan penghapus.",
            "Andi membeli buku, pensil dan penghapus.",
            "Andi membeli buku pensil dan penghapus."
        ],
        correctAnswer: "Andi membeli buku, pensil, dan penghapus."
    },
    {
        question: "Apa arti 'kalimat efektif' dalam konteks bahasa Indonesia?",
        answers: [
            "Kalimat yang sesuai aturan EYD.",
            "Kalimat yang padat, jelas, dan tidak bertele-tele.",
            "Kalimat yang menggunakan kata baku.",
            "Kalimat yang panjang namun jelas maknanya.",
            "Kalimat yang tidak menggunakan kata tidak baku."
        ],
        correctAnswer: "Kalimat yang padat, jelas, dan tidak bertele-tele."
    },
    {
        question: "Manakah kalimat yang menggunakan ejaan yang tepat?",
        answers: [
            "Mobil itu berwarna merah, besar dan cepat.",
            "Mobil itu berwarna merah besar, dan cepat.",
            "Mobil itu, berwarna merah besar dan cepat.",
            "Mobil itu berwarna merah, besar, dan cepat.",
            "Mobil itu besar, berwarna, merah dan cepat."
        ],
        correctAnswer: "Mobil itu berwarna merah, besar, dan cepat."
    },
    {
        question: "Kalimat berikut yang menggunakan kata baku adalah...",
        answers: [
            "Dia sedang mengirimkan faksmile ke kantor.",
            "Dia sedang mengirimkan faximile ke kantor.",
            "Dia sedang mengirimkan faksimile ke kantor.",
            "Dia sedang mengirimkan faks ke kantor.",
            "Dia sedang mengirimkan faximille ke kantor."
        ],
        correctAnswer: "Dia sedang mengirimkan faksmile ke kantor."
    },
    {
        question: "Penggunaan tanda baca yang tepat ada pada kalimat...",
        answers: [
            "Siswa, siswi, dan guru hadir di upacara.",
            "Siswa, siswi dan guru, hadir di upacara.",
            "Siswa dan siswi, guru hadir di upacara.",
            "Siswa, siswi dan, guru hadir di upacara.",
            "Siswa dan, siswi dan guru hadir di upacara."
        ],
        correctAnswer: "Siswa, siswi, dan guru hadir di upacara."
    }
];

let currentQuestionIndex = 0;
let answers = new Array(questions.length);

document.addEventListener("DOMContentLoaded", () => {
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            console.log("User authenticated:", user.uid);
            await loadProgress(user.uid); 
            displayQuestion(currentQuestionIndex);
            updateProgressBar();
            updateNumberBox();
        } else {
            console.error("User is not authenticated.");
            window.location.href = "login.html"; 
        }
    });

});

function displayNumbers() {
    const numbersContainer = document.getElementById('numbers-container');
    numbersContainer.innerHTML = '';
    for (let i = 0; i < questions.length; i++) {
        const numberBox = document.createElement('div');
        numberBox.classList.add('number-box');
        numberBox.textContent = i + 1;
        numberBox.addEventListener('click', () => {
            currentQuestionIndex = i;
            displayQuestion(i);
            updateProgressBar(); 
        });
        if (answers[i] !== undefined) {
            numberBox.classList.add('answered');
        }
        numbersContainer.appendChild(numberBox);
    }
}

function displayQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const answersBox = document.querySelector('.answers-box');
    const progressBar = document.getElementById('progress');

    if (!questionContainer || !answersBox) {
        console.error("Question container or answers box not found in HTML.");
        return;
    }

    questionContainer.textContent = questions[index].question;
    answersBox.innerHTML = '';
    questions[index].answers.forEach((answer, i) => {
        const answerContainer = document.createElement('div');
        answerContainer.classList.add('answer-container');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.id = `answer-${i}`;
        input.value = answer;

        const label = document.createElement('label');
        label.classList.add('answer-label');
        label.htmlFor = `answer-${i}`;
        label.textContent = answer;

        if (answers[index] === answer) {
            input.checked = true;
        }

        input.addEventListener('change', () => {
            answers[index] = answer;
            updateNumberBox();
            checkAnswer(index, answer);
            saveProgress(); 
            updateProgressBar();
        });


        answerContainer.appendChild(input);
        answerContainer.appendChild(label);
        answersBox.appendChild(answerContainer);
    });

    updateActiveNumber(index);

    const prevButton = document.getElementById('prev-button');
    prevButton.disabled = index === 0;
    prevButton.onclick = prevQuestion; 

    const nextButton = document.getElementById('next-button');
    if (index === questions.length - 1) {
        nextButton.textContent = "Selesai";
        nextButton.disabled = false; 
        nextButton.onclick = showConfirmPopup; 
    } else {
        nextButton.textContent = "Selanjutnya";
        nextButton.onclick = nextQuestion;
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');
    const totalQuestions = questions.length;
    const answeredQuestions = answers.filter(answer => answer !== "").length;
    const progress = (answeredQuestions / totalQuestions) * 100;

    progressBar.style.width = answeredQuestions > 0 ? progress + '%' : '0';
    progressPercentage.textContent = Math.round(progress) + '%';
}

function checkAnswer(index, selectedAnswer) {
    const feedbackContainer = document.getElementById('feedback');
    const correctAnswer = questions[index].correctAnswer;
    const answersBox = document.querySelector('.answers-box');

    answersBox.querySelectorAll('.answer-container').forEach(container => {
        container.classList.remove('correct-answer', 'incorrect-answer');
    });

    if (selectedAnswer === correctAnswer) {
        feedbackContainer.style.color = 'green';
        const selectedLabel = answersBox.querySelector(`input[value="${selectedAnswer}"]`).parentElement;
        selectedLabel.classList.add('correct-answer');
    } else {
        feedbackContainer.style.color = 'red';
        const selectedLabel = answersBox.querySelector(`input[value="${selectedAnswer}"]`).parentElement;
        selectedLabel.classList.add('incorrect-answer');

        const correctLabel = answersBox.querySelector(`input[value="${correctAnswer}"]`).parentElement;
        correctLabel.classList.add('correct-answer');
    }
}

function updateNumberBox() {
    const numberBoxes = document.getElementsByClassName("number-box");
    for (let i = 0; i < answers.length; i++) {
        const e = answers[i];
        if (e == '') {
            if (numberBoxes[i].classList.contains("answered")) {
                numberBoxes[i].classList.remove("answered");
            }
        } else {
            numberBoxes[i].classList.add("answered");
        }

    }
}


async function saveProgress() {
    const user = auth.currentUser;
    if (user) {
        const userId = user.uid;
        const progressRef = doc(db, "users", userId, "quizProgress", "progress");

        // Hitung progres berdasarkan jawaban
        const answeredQuestions = answers.filter(answer => answer !== undefined && answer !== null && answer !== "").length;
        const totalQuestions = answers.length;
        const progressValue = Math.round((answeredQuestions / totalQuestions) * 100);

        // Ganti nilai undefined atau null dalam answers dengan string kosong
        const sanitizedAnswers = answers.map(answer => (answer === undefined || answer === null ? "" : answer));

        const dataToSave = {
            currentQuestionIndex: currentQuestionIndex || 0,
            answers: sanitizedAnswers,
            progress: `${progressValue}%`
        };

        console.log("Sanitized Data to save:", JSON.stringify(dataToSave, null, 2));
        console.log("Firestore Path:", progressRef.path);

        try {
            await setDoc(progressRef, dataToSave, { merge: true });
            console.log("State saved successfully.");
        } catch (error) {
            console.error("Error saving state:", error);
        }
    } else {
        console.error("User is not authenticated. Cannot save progress.");
    }
}

async function loadProgress() {
    const user = auth.currentUser;
    if (user) {
        const progressRef = doc(db, "users", user.uid, "quizProgress", "progress");
        try {
            const docSnap = await getDoc(progressRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                currentQuestionIndex = data.currentQuestionIndex || 0;
                answers = data.answers || new Array(questions.length).map(answer => answer || "");

                displayNumbers();
                updateProgressBar();
                console.log("Progress loaded successfully:", data);
            } else {
                console.log("No progress found for this user.");
            }
        } catch (error) {
            console.error("Error loading progress:", error);
        }
    } else {
        console.error("User is not authenticated. Cannot load progress.");
    }
}

function calculateFinalScore() {
    let score = 0;
    questions.forEach((question, index) => {
        if (answers[index] === question.correctAnswer) {
            score += 1;
        }
    });
    return score;
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex = currentQuestionIndex - 1
        displayQuestion(currentQuestionIndex);
        updateProgressBar();
        saveProgress(); 
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        if (answers[currentQuestionIndex] != undefined) {
            currentQuestionIndex++;
        }
        displayQuestion(currentQuestionIndex);
        updateProgressBar(); 
        saveProgress(); 

    }
}

async function finishQuiz() {
    const user = auth.currentUser;
    if (user) {
        const resultRef = doc(db, "users", user.uid, "quizProgress", "result");
        const finalScore = calculateFinalScore();
        try {
            await setDoc(resultRef, {
                finalScore: finalScore,
                totalQuestions: questions.length,
                timestamp: new Date().toISOString()
            });
            console.log("Final score saved successfully.");
        } catch (error) {
            console.error("Error saving final score:", error);
        }
    } else {
        console.error("User is not authenticated. Cannot save score.");
    }
}



function updateActiveNumber(index) {
    const numberBoxes = document.querySelectorAll('.number-box');
    numberBoxes.forEach(box => box.classList.remove('active'));
    numberBoxes[index].classList.add('active');

}

async function resetQuiz() {
    const user = auth.currentUser;
    if (!user) {
        console.error("User is not authenticated. Cannot reset quiz.");
        return;
    }

    const userId = user.uid;
    const progressRef = doc(db, "users", userId, "quizProgress", "progress");

    try {
        await setDoc(progressRef, {
            currentQuestionIndex: 0,
            answers: new Array(questions.length).fill(""), 
            progress: "0%" 
        });

        currentQuestionIndex = 0;
        answers = new Array(questions.length).fill("");

        displayNumbers(); 
        displayQuestion(0); 
        updateProgressBar(); 

        console.log("Quiz has been reset.");
    } catch (error) {
        console.error("Error resetting quiz:", error);
    }
}

function showConfirmPopup() {
    const popup = document.getElementById("confirm-popup");
    popup.classList.remove("hidden"); 

}

function hideConfirmPopup() {
    const popup = document.getElementById("confirm-popup");
    popup.classList.add("hidden"); 
}

function showScorePopup(score) {
    const popup = document.getElementById("score-popup");
    const scoreDisplay = document.getElementById("score-display");

    scoreDisplay.textContent = `Skor: ${score}/${questions.length}`;

    popup.classList.remove("hidden");
}

function hideScorePopup() {
    const popup = document.getElementById("score-popup");
    popup.classList.add("hidden");
    window.location.href = "index.html";
}

document.getElementById("confirm-yes").addEventListener("click", async () => {
    hideConfirmPopup(); 
    await finishQuiz();
    const finalScore = calculateFinalScore(); 
    showScorePopup(finalScore); 
});

document.getElementById("confirm-no").addEventListener("click", () => {
    hideConfirmPopup(); 
});

document.getElementById("close-score-popup").addEventListener("click", () => {
    hideScorePopup(); 
    window.location.href = "quizselesai.html";
});

window.onload = function () {
    displayNumbers();
    loadProgress(); 
    displayQuestion(0); 
    updateProgressBar(); 
};

