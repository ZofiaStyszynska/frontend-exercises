window.addEventListener('load', () => {
  const toggleButton = document.getElementById('toggle-article');

  toggleButton.addEventListener('click', () => {
    const mainSection = document.querySelector('.article__main');
    const isArticleVisible = mainSection.style.display === 'block' ? true : false;

    toggleButton.innerHTML = `${!isArticleVisible ? 'Hide' : 'Show'} article`;

    toggleMainSection(!isArticleVisible);
  })
});

function toggleMainSection(show) {
  const mainSection = document.querySelector('.article__main');

  mainSection.style.display = show ? 'block' : 'none'
}