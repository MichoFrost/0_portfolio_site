// VARIABLER
const circle = document.querySelector('.circle');
const circleContainer = document.querySelector('.circle_container');
const themeStars = Array.from(document.querySelectorAll('.theme_star'));
const themeStarContainers = Array.from(document.querySelectorAll('.star_container'));

const animationContainer = document.querySelector('.animation_container');
const headingLetters = document.querySelectorAll('.heading_letter');
const circleText = document.querySelector('.circle_text');
const welcome = document.querySelector('.welcome');
const whenReady = document.querySelector('.whenReady');

const navbar = document.querySelector('.navbar');
const burgerMenu = document.querySelector('.burgerIcon');
const burgerLines = Array.from(document.querySelectorAll('.burgerIcon__line'));
const overlay = document.querySelector('.overlay');


function headingIteration(){
  headingLetters.forEach((e, index) => {
    setTimeout(() => {
      e.classList.add('move');
    }, 50 * index);
  })
}

// START SIDEN
startIntro();
function startIntro(){
  // console.log('startIntro');
  setTimeout(function(){
    welcome.classList.add('visible');
  }, 1000);

  setTimeout(function(){
    circle.classList.add('visible');
  }, 2000)
  setTimeout(function(){
    circleText.classList.add('visible');
  }, 2200)
  setTimeout(function(){
    whenReady.classList.add('visible');
  }, 2800)
}

// startSite();
// circle.classList.add('visible'); // FJERNES!
function startSite(){
  expandCircle();
  removeIntroText();
  setTimeout(() => {
    headingIteration();
  }, 3000); // HUSK = SKAL VÆRE 3000!!!

  setTimeout(() => {
    burgerMenu.classList.add('visible');
  }, 6000); // HUSK = SKAL VÆRE 6000!!!
}

// FJERN INTRO-TEKST
function removeIntroText() {
  welcome.classList.remove('visible');
  setTimeout(() => {
    whenReady.classList.remove('visible');
  }, 200);
  setTimeout(() => {
    circleText.classList.remove('visible');
  }, 600); // // HUSK = SKAL VÆRE  600!!!
}
// UDVID CIRKLEN
function expandCircle(){
  setTimeout(function(){
    circle.classList.add('expand');
    animationContainer.classList.add('rotate');
    themeStarContainers.forEach(e => {
      e.classList.add('visible');
    })
  }, 1400); // // HUSK = SKAL VÆRE  1400!!!
}

// EVENT-LISTENERS
circle.addEventListener('click', startSite);




// BURGER-MENU

burgerMenu.addEventListener('click', () => {
  overlay.classList.toggle('visible');
  navbar.classList.toggle('visible');
  burgerLines.forEach((e) => {
    e.classList.toggle('clicked');
  })
  closeAllNavbarSections();
})











// STJERNE-NAVIGATION
const allThemeSections = Array.from(document.querySelectorAll('.theme'));
const closeIcon = document.querySelector('.closeIcon');
const star1 = document.querySelector('.star_theme1_container');
const theme1 = document.querySelector('.theme1');
const star2 = document.querySelector('.star_theme2_container');
const theme2 = document.querySelector('.theme2');
const star3 = document.querySelector('.star_theme3_container');
const theme3 = document.querySelector('.theme3');
const star4 = document.querySelector('.star_theme4_container');
const theme4 = document.querySelector('.theme4');
const star5 = document.querySelector('.star_theme5_container');
const theme5 = document.querySelector('.theme5');

star1.addEventListener('click', function(){
  theme1.classList.add('visible');
  closeIcon.classList.add('visible');
  burgerMenu.classList.remove('visible');
})
star2.addEventListener('click', function(){
  theme2.classList.add('visible');
  closeIcon.classList.add('visible');
  burgerMenu.classList.remove('visible');
})
star3.addEventListener('click', function(){
  theme3.classList.add('visible');
  closeIcon.classList.add('visible');
  burgerMenu.classList.remove('visible');
})
star4.addEventListener('click', function(){
  theme4.classList.add('visible');
  closeIcon.classList.add('visible');
  burgerMenu.classList.remove('visible');
})
star5.addEventListener('click', function(){
  console.log("theme5")
  theme5.classList.add('visible');
  closeIcon.classList.add('visible');
  burgerMenu.classList.remove('visible');
})

closeIcon.addEventListener('click', function(){
  allThemeSections.forEach((e) => {
    e.classList.remove('visible');
  })
  // theme4.classList.remove('visible');
  closeIcon.classList.remove('visible');
  burgerMenu.classList.add('visible');
})

// MODAL
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal_image');
const body = document.querySelector('body');

body.addEventListener('click', function(event){
  if(!event.target.classList.contains('image')) return;
  console.log(event.target.tagName);
  modalImage.src = event.target.src;
  openModal();
})

function openModal() {
  modal.classList.toggle('visible');
  overlay.classList.toggle('visible');
}

// CLICK PÅ OVERLAY (gennemsigtige)
overlay.addEventListener('click', function(){
  overlay.classList.remove('visible');
  navbar.classList.remove('visible');
  modal.classList.remove('visible');
  burgerLines.forEach((e) => {
    e.classList.remove('clicked');
  })
  closeAllNavbarSections();
})

// NAVBAR-NAVIGATION

const allNavbarSections = Array.from(document.querySelectorAll('.navbar_section'));
const allNavbarLinks = Array.from(document.querySelectorAll('.navbar_link'));

allNavbarLinks.forEach(e => {
  e.addEventListener('click', clickLinks)
})

function closeAllNavbarSections(){
  allNavbarSections.forEach(e => {
    e.classList.remove('visible');
  })
}

function clickLinks(event) {
  if(!event.target.classList.contains('navbar_link')) return;
  const link = event.target.closest('.navbar_link');
  const section = allNavbarSections.find(s => s.dataset.menu === link.dataset.link);
  if(section.classList.contains('visible')) return;

  closeAllNavbarSections();
  setTimeout(function(){
    section.classList.toggle('visible');
  },200)
}
