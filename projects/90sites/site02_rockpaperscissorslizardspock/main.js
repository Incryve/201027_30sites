var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper');
var scissors = document.querySelector('.scissors');
var lizard = document.querySelector('.lizard');
var spock = document.querySelector('.spock');

var hands = {rock: rock, paper: paper, scissors: scissors, lizard: lizard, spock: spock};
var options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

var playerDecision;
var compDecision;

var mainElement = document.querySelector('.main');
var btnElement = document.querySelectorAll('.btn');

btnElement.forEach(function(button) {
  button.onclick = function start() {

    // here goes the code to "reset" colors (add .normal to main)
    mainElement.classList.remove('main_lose');
    mainElement.classList.remove('main_win');
    mainElement.classList.add('main');

    playerDecision = this.id;
    
    compDecision = options[Math.floor(Math.random()*5)];

    // document.querySelector('.option').style.display = 'none';
    document.querySelectorAll('.option').forEach((option) => option.style.display = 'none');
    
    countdown();
  }
});

function countdown() {
  var i = 3;

  count();

  function count() {
    document.querySelector('.score').innerHTML = i;

    if (i == 0) {
      displayResults();
    } else {
      i -= 1;
      setTimeout(count, 500);
    }
  }
};

function displayResults() {
  document.querySelector('.score').innerHTML = 'SHOOT';

  document.querySelector(`.player_right .${playerDecision}`).style.display = 'block';
  document.querySelector(`.computer_left .${compDecision}`).style.display = 'block';
  
  console.log(compDecision);
  console.log(playerDecision);

  setTimeout(function() {
    if (playerDecision === compDecision) {
      document.querySelector('.score').innerHTML = 'TIE';
    } else if (playerDecision === 'rock' && compDecision === 'scissors') {
      document.querySelector('.score').innerHTML = 'WIN';
      mainElement.classList.toggle('main_win');
    } else if (playerDecision === 'rock' && compDecision === 'lizard') {
      document.querySelector('.score').innerHTML = 'WIN';
      mainElement.classList.toggle('main_win');
    } else if (playerDecision === 'paper' && compDecision === 'rock') {
      document.querySelector('.score').innerHTML = 'WIN';
      mainElement.classList.toggle('main_win');
    } else if (playerDecision === 'paper' && compDecision === 'spock') {
      document.querySelector('.score').innerHTML = 'WIN';
      mainElement.classList.toggle('main_win');
    } else if (playerDecision === 'scissors' && compDecision === 'paper') {
      document.querySelector('.score').innerHTML = 'WIN';
      mainElement.classList.toggle('main_win');
    } else if (playerDecision === 'scissors' && compDecision === 'lizard') {
      document.querySelector('.score').innerHTML = 'WIN';
      mainElement.classList.toggle('main_win');
    } else if (playerDecision === 'lizard' && compDecision === 'paper') {
      document.querySelector('.score').innerHTML = 'WIN';
      mainElement.classList.toggle('main_win');
    } else if (playerDecision === 'lizard' && compDecision === 'spock') {
      document.querySelector('.score').innerHTML = 'WIN';
      mainElement.classList.toggle('main_win');
    } else if (playerDecision === 'spock' && compDecision === 'rock') {
      document.querySelector('.score').innerHTML = 'WIN';
      mainElement.classList.toggle('main_win');
    } else if (playerDecision === 'spock' && compDecision === 'scissors') {
      document.querySelector('.score').innerHTML = 'WIN';
      mainElement.classList.toggle('main_win');
    } else {
      document.querySelector('.score').innerHTML = 'LOSE';
      mainElement.classList.toggle('main_lose');
    }

  }, 400);
};
