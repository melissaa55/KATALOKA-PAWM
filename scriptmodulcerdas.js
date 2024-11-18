const wordsWithMeanings = [
    { word: "Ejaan", imgSrc: "images/bintang.png" },
    { word: "Tata Kata", imgSrc: "images/daun.png" },
    { word: "Tata Kalimat", imgSrc: "images/bunga2.png" },
    { word: "Paragraf", imgSrc: "images/bunga.png" },
    { word: "Karya Tulis Ilmiah (1)", imgSrc: "images/bunga3.png" },
    { word: "Karya Tulis Ilmiah (2)", imgSrc: "images/bintang2.png" }
];

function displayWords() {
    const container = document.getElementById('words-container');
    container.innerHTML = '';

    wordsWithMeanings.forEach((item) => {
        const wordLink = document.createElement('a');
        wordLink.classList.add('word-box'); 
        wordLink.href = `link-yt-katapedia.html?word=${item.word}`;
        
        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.alt = item.word;
        img.classList.add('word-image');

        const wordText = document.createElement('span');
        wordText.textContent = item.word;
        wordText.classList.add('word-title'); 

        wordLink.appendChild(img);
        wordLink.appendChild(wordText);
        
        container.appendChild(wordLink);
    });
}

window.onload = displayWords;
