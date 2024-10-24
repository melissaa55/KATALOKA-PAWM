const wordsWithMeanings = [
    { word: "Inovasi", meaning: "Pembaharuan atau ide baru yang diterapkan untuk meningkatkan sesuatu." },
    { word: "Kolaborasi", meaning: "Kerja sama antara dua pihak atau lebih untuk mencapai tujuan bersama." },
    { word: "Melankolis", meaning: "Suasana hati yang cenderung sedih atau murung." },
    { word: "Inklusif", meaning: "Bersifat merangkul atau melibatkan semua pihak." },
    { word: "Altruisme", meaning: "Perilaku mengutamakan kepentingan orang lain di atas kepentingan diri sendiri." },
    { word: "Ambivalen", meaning: "Memiliki perasaan atau pendapat yang saling bertentangan pada saat yang sama." },
    { word: "Sinergi", meaning: "Kerja sama antara beberapa pihak untuk menghasilkan efek yang lebih besar daripada jika bekerja sendiri-sendiri." },
    { word: "Paradigma", meaning: "Kumpulan asumsi atau pemikiran yang menjadi dasar cara pandang atau teori." },
    { word: "Resiliensi", meaning: "Kemampuan untuk pulih dari kesulitan atau tekanan." },
];

function displayWords() {
    const container = document.getElementById('words-container');
    container.innerHTML = '';

   
    wordsWithMeanings.forEach((item) => {
        const wordLink = document.createElement('a'); 
        wordLink.classList.add('word-box'); 
        wordLink.textContent = item.word;
        wordLink.href = `kata-hari-ini.html?word=${item.word}`; 

        container.appendChild(wordLink);
    });
}

window.onload = displayWords;
