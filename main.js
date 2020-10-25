window.addEventListener('load', () => {
    showMainSection();
});

function showMainSection() {
    const mainSection = document.querySelector('.article__main');
    mainSection.style.display = 'block';
}