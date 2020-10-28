var btnElement = document.querySelector('#btn');

var containerElement = document.querySelector('#circle_container');

btnElement.onclick = function newCircle() {
  var divElement = document.createElement('div');
  divElement.setAttribute('class', 'circle');

  divElement.style.width = "100px";
  divElement.style.height = "100px";
  divElement.style.borderRadius = "50px";
  divElement.style.backgroundColor = '#900C3F';
  
  containerElement.appendChild(divElement);
}