import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
function randomColor(arr) {
  return arr[randomIntegerFromInterval(arr.length - 1)];
}

function randomIntegerFromInterval(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*========Решение путем добавления(удаления) на кнопки слушателей EventListener=======*/
let intervalId = null;

const startRef = document.querySelector('#start');
const stopRef = document.querySelector('#stop');
const bodyRef = document.querySelector('body');

startRef.addEventListener('click', startColorSwitchHendler);

function startColorSwitchHendler() {
  startRef.removeEventListener('click', startColorSwitchHendler);
  stopRef.addEventListener('click', stoptColorSwitchHendler);
  bodyRef.style.backgroundColor = randomColor(colors);
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = randomColor(colors);
  }, 1000);
}

function stoptColorSwitchHendler() {
  startRef.addEventListener('click', startColorSwitchHendler);
  stopRef.removeEventListener('click', stoptColorSwitchHendler);
  clearInterval(intervalId);
}

/*========Решение путем добавления(удаления) на кнопки состояния 'disabled'=======*/
let id = null;

const disabledStartRef = document.querySelector('#disabled-start');
const disabledStopRef = document.querySelector('#disabled-stop');
const divRef = document.querySelector('#disabled');

disabledStartRef.addEventListener('click', disabledStartColorSwitchHendler);
disabledStopRef.addEventListener('click', disabledStoptColorSwitchHendler);

disabledStopRef.setAttribute('disabled', 'disabled');

function disabledStartColorSwitchHendler() {
  disabledStopRef.removeAttribute('disabled');
  divRef.style.backgroundColor = randomColor(colors);
  disabledStartRef.setAttribute('disabled', 'disabled');
  id = setInterval(() => {
    divRef.style.backgroundColor = randomColor(colors);
  }, 1000);
}

function disabledStoptColorSwitchHendler() {
  disabledStartRef.removeAttribute('disabled');
  disabledStopRef.setAttribute('disabled', 'disabled');
  clearInterval(id);
}
//================================================================//
