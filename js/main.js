let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let menuOff = document.querySelector('.menuOff');
let menuLink = document.querySelectorAll('.menu__link')

menuBtn.addEventListener('click', function() {

  menuBtn.classList.toggle('burger--active')
  menu.classList.toggle('active')
});

menuOff.addEventListener('click', function() {
  menu.classList.remove('active')
});

menuLink.forEach((elem)=>{
  elem.addEventListener('click',()=> {
    menu.classList.remove('active')
  })
})




