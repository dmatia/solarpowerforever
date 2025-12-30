const menu = document.getElementById('menu-container');
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');

openBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
  openBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('is-open');
    openBtn.style.display = 'block';
});
