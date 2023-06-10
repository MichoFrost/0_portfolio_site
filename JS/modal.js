// const overlay = document.querySelector('.overlay');
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
  modal.classList.remove('visible');
})