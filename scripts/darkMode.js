const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const audio = document.getElementById('light');

// Check if dark mode preference is stored in localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set initial state based on the stored preference
if (isDarkMode) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    darkModeToggle.checked = true;
} else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
}

// Event listener for dark mode toggle
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        audio.play();
        // Store dark mode preference in localStorage
        localStorage.setItem('darkMode', 'true');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        audio.play();
        // Remove dark mode preference from localStorage
        localStorage.setItem('darkMode', 'false');
    }
});
