var btnElement = document.querySelector('#btn');

var containerElement = document.querySelector('#circle_container');

btnElement.onclick = function newCircle() {
  var circleElement = document.createElement('div');
  circleElement.setAttribute('class', 'circle');

  circleElement.style.width = "100px";
  circleElement.style.height = "100px";
  circleElement.style.borderRadius = "50px";
  circleElement.style.backgroundColor = '#900C3F';
  
  circleElement.onmouseover = function() {
    circleElement.style.backgroundColor = getRandomColor();
  }
  
  containerElement.appendChild(circleElement);
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}