const cards = document.querySelectorAll('.memory_card');

let hasFlippedCard = false;
let fisrtCard, secondCard;

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

