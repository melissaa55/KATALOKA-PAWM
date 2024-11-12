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
        correctAnswer: "Dia sedang mengirimkan faksmile ke kantor."
    }
];

let currentQuestionIndex = 0;
let answers = new Array(questions.length); 
let historyStack = [];

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
        });
        if (answers[i] !== undefined) {
            numberBox.classList.add('answered');
        }

        numbersContainer.appendChild(numberBox);
    };

}
function displayQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const answersBox = document.querySelector('.answers-box');
    const feedbackContainer = document.getElementById('feedback');

 
    feedbackContainer.textContent = '';

   
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

       
        if (answers[index] === answer) {
            input.checked = true;
        }

        input.addEventListener('change', () => {
            answers[index] = answer;
            updateNumberBox(index);
            checkAnswer(index, answer); 
        });

        const label = document.createElement('label');
        label.classList.add('answer-label');
        label.htmlFor = `answer-${i}`;
        label.textContent = answer;

        answerContainer.appendChild(input);
        answerContainer.appendChild(label);

        answersBox.appendChild(answerContainer);
    });

    document.getElementById('prev-button').disabled = index === 0;
    document.getElementById('next-button').disabled = index === questions.length - 1;

    updateActiveNumber(index); 
}

function checkAnswer(index, selectedAnswer) {
    const feedbackContainer = document.getElementById('feedback'); 
    const correctAnswer = questions[index].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        feedbackContainer.textContent = 'Benar!';
        feedbackContainer.style.color = 'green';
    } else {
        feedbackContainer.textContent = `Salah. Jawaban yang benar adalah: ${correctAnswer}`;
        feedbackContainer.style.color = 'red';
    }
}

function updateNumberBox(index) {
    const numberBoxes = document.querySelectorAll('.number-box');
    if (answers[index] !== undefined) {
        numberBoxes[index].classList.add('answered');
    }
}

function updateActiveNumber(index) {
    const numberBoxes = document.querySelectorAll('.number-box');
    numberBoxes.forEach(box => box.classList.remove('active'));
    numberBoxes[index].classList.add('active');
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex = currentQuestionIndex - 1
        displayQuestion(currentQuestionIndex);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        historyStack.push(currentQuestionIndex);
        displayQuestion(currentQuestionIndex);
    }
}

window.onload = function () {
    historyStack.push(currentQuestionIndex);
    displayNumbers();
    displayQuestion(currentQuestionIndex);
};
