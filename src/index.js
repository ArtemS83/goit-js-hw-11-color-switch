import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;

const srartRef = document.querySelector('#start');
const stopRef = document.querySelector('#stop');
const bodyRef = document.querySelector('body');

srartRef.addEventListener('click', startColorSwitchHendler);
stopRef.addEventListener('click', stoptColorSwitchHendler);

function startColorSwitchHendler() {
  srartRef.setAttribute('disabled', 'disabled');
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = randomColor(colors);
    console.log(randomColor(colors)); // для отслеживания цвета в консоли
  }, 1000);
}

function stoptColorSwitchHendler() {
  srartRef.removeAttribute('disabled');
  clearInterval(intervalId);
  console.log('STOP setInterval');
}

function randomColor(arr) {
  return arr[randomIntegerFromInterval(arr.length - 1)];
}

function randomIntegerFromInterval(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
