const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');
const nav = document.querySelector('.navbar');
const navbara = document.querySelector('.navbar_a');
const container = document.querySelector('.container');
// toggleBtn.addEventListener('click', () => {
//   menu.classList.toggle('active');
//   icons.classList.toggle('active');
//   nav.classList.toggle('active');
// }

// document.onclick = function(e){
// // toggleBtn.onclick = function(e){
//   toggleBtn.classList.toggle('active');
//   menu.classList.toggle('active');
//   icons.classList.toggle('active');
//   nav.classList.toggle('active');
//   }
// }

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  menu.classList.toggle('active');
  icons.classList.toggle('active');
  nav.classList.toggle('active');
})


menu.addEventListener('click', () => {
  toggleBtn.classList.remove('active');
  menu.classList.remove('active');
  icons.classList.remove('active');
  nav.classList.remove('active');
})

container.addEventListener('click', () => {
  toggleBtn.classList.remove('active');
  menu.classList.remove('active');
  icons.classList.remove('active');
  nav.classList.remove('active');
})

  // else if(toggleBtn.classList.contains('active'))
  // // if(e.target.id !== 'menu')
  // { //&& e.target.id !=='toggleBtn' && e.target.id !=='menu')
  // toggleBtn.classList.remove('active');
  // menu.classList.remove('active');
  // icons.classList.remove('active');
  // nav.classList.remove('active');
  // }



// document.onclick = function(e){
//   if(e.target.id !== 'toggleBtn')  {
//   toggleBtn.classList.toggle('active');
//   menu.classList.toggle('active');
//   icons.classList.toggle('active');
//   nav.classList.toggle('active');
//   }
//
//   else if(toggleBtn.classList.contains('active'))
//   // if(e.target.id !== 'menu')
//   { //&& e.target.id !=='toggleBtn' && e.target.id !=='menu')
//   toggleBtn.classList.remove('active');
//   menu.classList.remove('active');
//   icons.classList.remove('active');
//   nav.classList.remove('active');
//   }




// const navbara = document.querySelector('.navbar_a');
// navbara.addEventListener('click', () => {
//   menu.classList.toggle('close');
//   icons.classList.toggle('close');
//   nav.classList.toggle('close');
// });
