const burger = document.querySelector('#burger')
const nav = document.querySelector('.header__nav')

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

const themeBtn = document.querySelector('.theme-btn')
const themeIcon = themeBtn.querySelector('img');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')
  if(document.body.classList.contains('dark-theme')){
    themeIcon.src = 'img/2.svg'
  }else{
    themeIcon.src = 'img/moon-svgrepo-com.svg';
  }
})


