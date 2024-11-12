const wordsWithMeanings = [
    { word: "Ejaan"},
    { word: "Tata Kata"},
    { word: "Tata Kalimat"},
    { word: "Paragraf"},
    { word: "Karya Tulis Ilmiah (1)"},
    { word: "Karya Tulis Ilmiah (2)"}
];

function displayWords() {
    const container = document.getElementById('words-container');
    container.innerHTML = '';

    wordsWithMeanings.forEach((item) => {
        const wordLink = document.createElement('a');
        wordLink.classList.add('word-box'); 
        wordLink.textContent = item.word;
        wordLink.href = `link-yt-katapedia.html?word=${item.word}`; 

        container.appendChild(wordLink);
    });
}

window.onload = displayWords;
