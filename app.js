const box = document.getElementById('overlayBox');
const button = document.querySelector('.toggle-btn');

button.addEventListener('click', () => {
    box.classList.toggle('small');
});