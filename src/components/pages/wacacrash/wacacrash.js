import './wacacrash.css';

const INITIAL_SECONDS = 40;
const INITIAL_SCORE = 0;

let wacaScore;
let interval;
let seconds;

const divApp = document.querySelector('#app');

export const initWaca = () => {
  divApp.innerHTML = '';
  wacaScore = INITIAL_SCORE;
  seconds = INITIAL_SECONDS;
  clearInterval(interval);
  createBoard();
};

const createBoard = () => {
  const containerSection = document.createElement('section');
  containerSection.classList.add('container');

  const randomImgSection = document.createElement('section');
  randomImgSection.classList.add('random-img-section');

  const dataSection = document.createElement('section');
  dataSection.classList.add('data-section');
  const playButton = document.createElement('button');
  const resetButton = document.createElement('button');
  const timer = document.createElement('p');
  const score = document.createElement('p');

  playButton.classList.add('play-btn', 'btn');
  resetButton.classList.add('reset-btn', 'btn');
  timer.classList.add('timer-interval');
  score.classList.add('score');

  playButton.textContent = 'Play';
  resetButton.textContent = 'Reset';
  timer.textContent = 'TIMER';
  score.textContent = `Score: ${wacaScore}`;

  playButton.addEventListener('click', () => {
    initiateGame();
  });

  resetButton.addEventListener('click', () => {
    initWaca();
  });

  dataSection.append(playButton, resetButton, timer, score);
  containerSection.append(randomImgSection, dataSection);
  divApp.append(containerSection);
};

const createMonster = () => {
  const randomImgSection = document.querySelector('.random-img-section');
  const imgMonster = document.createElement('img');

  imgMonster.classList.add('img-monster');
  imgMonster.src = './images/monst.png';

  imgMonster.addEventListener('click', () => {
    sumScore();
    imgMonster.style.display = 'none';
  });

  randomImgSection.append(imgMonster);
};

const randomizeMonster = () => {
  const randomImgSection = document.querySelector('.random-img-section');
  const imgMonster = document.querySelector('.img-monster');

  let maxX = randomImgSection.offsetWidth - imgMonster.width;
  let maxY = randomImgSection.offsetHeight - imgMonster.height;

  let left = Math.random() * maxX;
  let top = Math.random() * maxY;

  imgMonster.style.left = `${left}px`;
  imgMonster.style.top = `${top}px`;
  imgMonster.style.display = 'block';
};

const decrementCountDown = () => {
  const timer = document.querySelector('.timer-interval');
  timer.innerHTML = seconds + ' seconds';

  if (seconds === 0) {
    alert('Time is over');
    clearInterval(interval);
  } else {
    seconds--;
  }
};

const initiateGame = () => {
  createMonster();
  interval = setInterval(() => {
    randomizeMonster();
    decrementCountDown();
  }, 1000);
};

const sumScore = () => {
  const score = document.querySelector('.score');
  score.textContent = `Score: ${++wacaScore}`;
};
