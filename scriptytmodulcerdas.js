const urlParams = new URLSearchParams(window.location.search);
const word = urlParams.get('word');

const wordLinksMap = {
    "Ejaan": ["iBD-zpM4nak", "hjpT8gP_4js", "TBBBm8a62mE", "Oi8xSvDCZ7w", "jdLuv8clJiQ", "Cm-lw9RbKxQ", "bgA5EgM-B9U", "Ljr42qNJ0-8", "3BubG7sRsRs"],
    "Tata Kata": ["UCQ5pJoWznQ", "GMY2Gp6uOBM", "2Rbsl7LWhZU", "CLKdmfFtlAY"],
    "Tata Kalimat": ["2RR6m5RFKf0", "vof0n1e3qDU", "evW3BopOw7k", "Ty6dfHKCCBg", "DY75Um_sD14", "8VWFkKqNGcA", "UkHiqZxhSoY"],
    "Paragraf": ["38PmUC6VMkM", "b2RgcP7zts", "URCrn71q9Ng", "54bJF8sZSbc", "SPhRq5msUFs"],
    "Karya Tulis Ilmiah (1)": ["agvtdJ-k8aI", "LiVblsdBhcI", "4VN2DbVT4Ao"],
    "Karya Tulis Ilmiah (2)": ["Pxxqx5qQfms", "_25GVr59HOg", "5hcleKYEhYo", "brojTczcHdI"]
};

function displayLinks() {
    const container = document.getElementById('links-container');

    const videoIds = wordLinksMap[word];

    if (videoIds && videoIds.length > 0) {
        videoIds.forEach(videoId => {
            const videoBox = document.createElement('div');
            videoBox.classList.add('video-box');

            // YouTube iframe
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.width = "350";
            iframe.height = "220";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;

            // Mark as Watched button
            const watchedButton = document.createElement('button');
            watchedButton.textContent = "Telah Ditonton";
            watchedButton.classList.add('watched-button');
            watchedButton.onclick = () => toggleWatchedState(watchedButton);

            // Append iframe and button to videoBox
            videoBox.appendChild(iframe);
            videoBox.appendChild(watchedButton);

            // Append videoBox to container
            container.appendChild(videoBox);
        });
    } else {
        container.textContent = "Tidak ada video ditemukan.";
    }
}

function toggleWatchedState(button) {
    if (button.classList.contains('watched')) {
        // Unmark as watched
        button.textContent = "Telah Ditonton";
        button.classList.remove('watched');
    } else {
        // Mark as watched
        button.textContent = "Telah Ditonton";
        button.classList.add('watched');
    }
}

window.onload = displayLinks;
