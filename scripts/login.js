const submitButton = document.getElementById('submitButton');
const randomHref = document.getElementById('notAButton');

const pass = "iloveschoolsurf"

submitButton.addEventListener('click', () => {
    const input = document.getElementById('passwordInput').value;
    if (input === pass) {
        alert('Password correct. Welcome to SchoolSurf. 🏄‍♂️');
        window.location.href = './pages/lessons.html';
    } else {
        alert('Sorry, the password is incorrect.')
    }
})