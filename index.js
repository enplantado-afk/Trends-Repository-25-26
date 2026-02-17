const morningMessage = document.querySelector('.morning-routine-message');
const nightMessage = document.querySelector('.night-routine-message');
const morningBtn = document.getElementById('morning');
const nightBtn = document.getElementById('night');

// First state: hidden
morningMessage.style.display = 'none';
nightMessage.style.display = 'none';

morningBtn.addEventListener('click', function() {
    if (morningMessage.style.display === 'none') {
        morningMessage.style.display = 'block';
        morningBtn.textContent = 'Hide';
    } else {
        morningMessage.style.display = 'none';
        morningBtn.textContent = 'Show';
    }
});

nightBtn.addEventListener('click', function() {
    if (nightMessage.style.display === 'none') {
        nightMessage.style.display = 'block';
        nightBtn.textContent = 'Hide';
    } else {
        nightMessage.style.display = 'none';
        nightBtn.textContent = 'Show';
    }
});