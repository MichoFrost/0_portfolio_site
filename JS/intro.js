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

    console.log(e)
  })
}




// START SIDEN
startIntro();
function startIntro(){
  console.log('startIntro');
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
  }, 3000);
  burgerMenu.classList.add('visible');
}


// FJERN INTRO-TEKST
function removeIntroText() {
  welcome.classList.remove('visible');
  setTimeout(() => {
    whenReady.classList.remove('visible');
  }, 200);
  setTimeout(() => {
    circleText.classList.remove('visible');
  }, 600);
}
// UDVID CIRKLEN
function expandCircle(){
  setTimeout(function(){
    circle.classList.add('expand');
    animationContainer.classList.add('rotate');
    themeStarContainers.forEach(e => {
      e.classList.add('visible');
    })
  }, 1400);
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
})


