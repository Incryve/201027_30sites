
document.querySelector('body').onload = function showTime() {
  let time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let currentTime = hours + ':' + minutes + ':' + seconds;
  
  document.querySelector('#clock').innerHTML = currentTime;
  setInterval(showTime, 1000);
}

var btnElement = document.querySelector('#dark_mode');

document.querySelector('#dark_mode').onclick = function() {
  btnElement.classList.toggle('dark');

  if (btnElement.classList.contains('dark')) {
    document.querySelector('#dark_mode').innerHTML = 'day';
  } else {
    document.querySelector('#dark_mode').innerHTML = 'night';
  }
  
  document.querySelector('body').classList.toggle('dark');
}