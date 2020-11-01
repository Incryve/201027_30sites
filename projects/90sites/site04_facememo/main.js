const cards = document.querySelectorAll('.memory_card');

let flippedCard = false;
let lockedBoard = false;
var firstCard, secondCard;

function flipCard() {
  if (lockedBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  flippedCard = false;

  checkMatches();
}

function checkMatches() {
  let isMatch = firstCard.dataset.key === secondCard.dataset.key;
  isMatch ? disableCards() : unflipCards();

  console.log(firstCard.dataset.key, secondCard.dataset.key);
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  
  lockedBoard = true;

  setTimeout( () => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();

  }, 1500);
}

function resetBoard() {
  [flippedCard, lockedBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// this is a IIFE (Immediately Invoked Function Expression). 
// A function that gets executed when defined.
// Is like declaring a function for a function name. 
// (function name() {} ) () ;

(function shuffleCards() {
  cards.forEach(card => {
    let randomCards = Math.floor(Math.random() * cards.length);
    card.style.order = randomCards;
  })
})();

cards.forEach(card => card.addEventListener('click', flipCard));

