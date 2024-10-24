document.getElementById('activateLogin').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block'; 
});

function handleLogin(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'trenggonomeli@gmail.com' && password === 'meli1234') {
        alert('Login berhasil!');
        window.location.href = '/index.html'; 
    } else {
        alert('Email atau password salah!'); 
    }
}