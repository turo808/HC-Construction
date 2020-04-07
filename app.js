const navSlide = ( ) => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click',() => {
    //ToggleNow
    nav.classList.toggle('nav-active');

    //Animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
          link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .4}s`;
        }
    });
    //Burger Animation
    burger.classList.toggle('toggle');

  });


}
navSlide();


const buttons = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');

function open(e) {
  overlay.classList.add('open');
  const src= e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
}

function close() {
  overlay.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);
