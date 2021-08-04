const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');
const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.menu')

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
  nav.classList.toggle('active');
});
// const bsCollapse = new bootstrap.Collapse(toggleBtn); // or menu?

// navLinks.forEach((l) => { //bootstrap in html connection can be worked.
//   l.addEventListener('click', () => {toggleBtn.classList.toggle('show')})
//   l.addEventListener('click', () => {bsCollapse.toggle()})
//   });

// document.addEventListener('click', function(e){
// if(e.target.id =='menu' && pt == true){
//   alert("same");
// //   menu.classList.remove('active');
// //   icon.classList.remove('active');
// //   nav.classList.remove('active');
//   return pt = false;
//   }
// });
                          
// 20210805 change
// const toggleBtn = document.getElementById('navbar__toggleBtn');
// const menu = document.getElementById('.navbar__menu');
// const icons = document.getElementById('.navbar__icons');
// const nav = document.getElementById('.navbar');

// document.onclick = function(e){
//   if(e.target.id !=='menu' && e.target.id !=='toggleBtn')
//   {menu.classList.remove('active');
//   icon.classList.remove('active');
//   nav.classList.remove('active')
//   }
// }

// toggleBtn.onclick = function(){
//   toggleBtn.classList.toggle('active');
//   menu.classList.toggle('active');
//   icon.classList.toggle('active');
//   nav.classList.toggle('active')
// }
    
    
