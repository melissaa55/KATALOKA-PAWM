document.querySelector('.dropbtn').addEventListener('click', function(event) {
    event.preventDefault(); 
    const dropdown = this.parentElement; 
    dropdown.classList.toggle('show'); 
});
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
