import './guess.css';

export const initGuess = () => {
  const divApp = document.querySelector('#app');
  divApp.innerHTML = '';

  const titleGuessName = document.createElement('h2');
  titleGuessName.textContent = 'Guess the Number';
  titleGuessName.classList.add('guess-title');
  const divInputAndButton = document.createElement('div');
  divInputAndButton.classList.add('container-input-button');
  const inputNumber = document.createElement('input');
  inputNumber.type = 'text';
  inputNumber.placeholder = 'between 1-99';
  inputNumber.classList.add('number-field');
  inputNumber.id = 'number-field';
  inputNumber.maxLength = 2;
  const buttonGuess = document.createElement('button');
  buttonGuess.textContent = 'Guess';
  buttonGuess.classList.add('guess-button');
  const divMessages = document.createElement('div');
  divMessages.classList.add('container-messages');
  const messages = document.createElement('p');
  messages.classList.add('message-p');

  divInputAndButton.append(inputNumber, buttonGuess);
  divMessages.append(messages);
  divApp.append(titleGuessName, divInputAndButton, divMessages);

  let guessButton = document.querySelector('.guess-button');
  guessButton.addEventListener('click', () => checkNumber(), false);

  inputNumber.addEventListener('input', () => {
    validarEntrada();
  });
  // const savedGameState = JSON.parse(sessionStorage.getItem('guessGameState'));
  // if (savedGameState) {
  //   numberToGuess = savedGameState.numberToGuess;
  //   messages.innerHTML = savedGameState.messages;
  // }
};

function validarEntrada() {
  let inputNumber = document.querySelector('#number-field');
  const valor = inputNumber.value;

  if (!/^\d{1,2}$/.test(valor)) {
    inputNumber.setCustomValidity(
      'Número inválido. Debe ser menor o igual a 99.'
    );
  } else {
    inputNumber.setCustomValidity('');
  }
}

let numberToGuess;

function randomNumber(low, high) {
  let randomNum = Math.floor(Math.random() * high - low + 1) + low;
  return randomNum;
}

function setNumberToGuess() {
  numberToGuess = randomNumber(0, 99);
}
setNumberToGuess();

function checkNumber() {
  let numberField = document.querySelector('.number-field');
  let results = document.querySelector('.message-p');

  let enteredNumber = parseInt(numberField.value, 10);
  numberField.value = '';

  if (enteredNumber == numberToGuess) {
    let message = `<p>🎉 Your guess of ${enteredNumber} is <b>correct</b>!</p>`;
    results.insertAdjacentHTML('afterbegin', message);
    setNumberToGuess();
    setTimeout(clearMessages, 2000);
    return;
  }
  let message = '';
  if (enteredNumber < numberToGuess || enteredNumber == '') {
    message = `<p>👇 Your guess of ${enteredNumber} is <b>too low</b>!</p>`;
    results.insertAdjacentHTML('afterbegin', message);
  } else {
    message = `<p>🎈 Your guess of ${enteredNumber} is <b>too high</b>!</p>`;
    results.insertAdjacentHTML('afterbegin', message);
  }

  if (enteredNumber == '') {
    let message = `<p>You have to write a number first!</p>`;
    results.insertAdjacentHTML('afterbegin', message);
  }

  // savedGameState();

  function clearMessages() {
    results.innerHTML = '';
  }

  // function savedGameState() {
  //   const gameState = {
  //     numberToGuess,
  //     messages: document.querySelector('.message-p').innerHTML
  //   };
  //   sessionStorage.setItem('guessGameState', JSON.stringify(gameState));
  // }
}
