const wordsWithMeanings = [
    { word: "Ejaan", imgSrc: "images/buku.png" },
    { word: "Tata Kata", imgSrc: "images/buku.png" },
    { word: "Tata Kalimat", imgSrc: "images/buku.png" },
    { word: "Paragraf", imgSrc: "images/buku.png" },
    { word: "Karya Tulis Ilmiah (1)", imgSrc: "images/buku.png" },
    { word: "Karya Tulis Ilmiah (2)", imgSrc: "images/buku.png" }
];

function displayWords() {
    const container = document.getElementById('words-container');
    container.innerHTML = '';

    wordsWithMeanings.forEach((item) => {
        const wordLink = document.createElement('a');
        wordLink.classList.add('word-box'); 
        wordLink.href = `link-yt-katapedia.html?word=${item.word}`;
        
        // Create image element
        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.alt = item.word;
        img.classList.add('word-image'); // Add a class for styling the image
        
        // Create text element
        const wordText = document.createElement('span');
        wordText.textContent = item.word;
        wordText.classList.add('word-title'); // Add a class for styling the text
        
        // Append image and text to the box
        wordLink.appendChild(img);
        wordLink.appendChild(wordText);
        
        container.appendChild(wordLink);
    });
}

window.onload = displayWords;
