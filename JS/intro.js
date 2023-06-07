// VARIABLER
const circle = document.querySelector('.circle');
const circleContainer = document.querySelector('.circle_container');
const circleText = document.querySelector('.circle_text');
const welcome = document.querySelector('.welcome');
const whenReady = document.querySelector('.whenReady');

const themeStars = Array.from(document.querySelectorAll('.theme_star'));
const themeStarContainers = Array.from(document.querySelectorAll('.star_container'));

const animationContainer = document.querySelector('.animation_container');

const headingLetters = document.querySelectorAll('.heading_letter');
console.log(headingLetters);


function headingIteration(){
  headingLetters.forEach((e) => {
    setTimeout(() => {
      console.log('Iteration');
      e.classList.add('move');
    }, 1000);
  })
}




// START SIDEN
startSite();
function startSite(){
  setTimeout(function(){
    welcome.classList.add('visible');
  }, 1000);

  setTimeout(function(){
    circle.classList.add('visible');
  }, 2000)
  setTimeout(function(){
    circleText.classList.add('visible');
  }, 3000)
  setTimeout(function(){
    whenReady.classList.add('visible');
  }, 4000)
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
  console.log('expandCircle')
  removeIntroText();
  setTimeout(function(){
    circle.classList.remove('shrink');
    animationContainer.classList.add('rotate');
    themeStarContainers.forEach(e => {
      e.classList.add('visible');
    })
  }, 1400);

  // setTimeout(() => {

  // });
  // headingIteration();


}

// EVENT-LISTENERS
circle.addEventListener('click', expandCircle);