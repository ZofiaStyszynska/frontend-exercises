window.addEventListener('load', () => {
  const showButton = document.querySelector('#show-article');
  const hideButton = document.querySelector('#hide-article');
  
  showButton.addEventListener('click', () => {
    toggleMainSection(true);
  });

  hideButton.addEventListener('click', () => {
    toggleMainSection(false);
  });
});

function toggleMainSection(show) {
  const mainSection = document.querySelector('.article__main');

  mainSection.style.display = show ? 'block' : 'none'
}