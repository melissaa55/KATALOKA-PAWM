function handleRegister(event) {
    event.preventDefault(); 

    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmpassword = document.getElementById('register-confirm-password').value;

    if (name === 'Melissa Trenggono'&& email === 'trenggonomeli@gmail.com' && password === 'meli1234' && confirmpassword === 'meli1234') {
        alert('Pendaftaran berhasil! Silakan login.');
        window.location.href = '/index.html'; 
    }
}
