const cards = document.querySelectorAll('.memory_card');

let hasFlippedCard = false;
let fisrtCard, secondCard;

function flipCard() {
  this.classList.add('flip');
}

// if (hasFlippedCard) {
//   hasFlippedCard = true;
//   firstCard = this;
// }

cards.forEach(card => card.addEventListener('click', flipCard));

