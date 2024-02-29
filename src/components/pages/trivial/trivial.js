import './trivial.css';

export const dataTrivial = [
  {
    id: 'pregunta1',
    pregunta: '¿Quiénes tienen los 3 anillos de poder de los Elfos?',
    respuestas: [
      'Celeborn, Galadriel y Elrond',
      'Thranduil, Galadriel y Celeborn',
      'Gandalf, Galadriel y Elrond',
      'Thranduil, Galadriel y Elrond'
    ],
    correcta: 'Gandalf, Galadriel y Elrond'
  },
  {
    id: 'pregunta2',
    pregunta: '¿Cómo se llama el padre de Legolas?',
    respuestas: ['Celeborn', 'Thranduil', 'Haldir', 'Elrond'],
    correcta: 'Thranduil'
  },
  {
    id: 'pregunta3',
    pregunta: '¿Nombre Élfico de Gandalf?',
    respuestas: ['Mithrandir', 'Curunír', 'Aiwendil', 'Elendil'],
    correcta: 'Mithrandir'
  },
  {
    id: 'pregunta4',
    pregunta: '¿De dónde viene Legolas?',
    respuestas: ['Lórien', 'Lothlórien', 'Rivendell', 'Mirkwood'],
    correcta: 'Mirkwood'
  },
  {
    id: 'pregunta5',
    pregunta: '¿Cómo se llama el Uruk-Hai que mató a Boromir?',
    respuestas: ['Shagrat', 'Lurtz', 'Gothmog', 'Grishnákh'],
    correcta: 'Lurtz'
  },
  {
    id: 'pregunta6',
    pregunta:
      '¿Cómo se llama el monumento que sirve como frontera norte de Gondor?',
    respuestas: ['Argonath', 'Anduin', 'Arnor', 'Aiwendil'],
    correcta: 'Argonath'
  },
  {
    id: 'pregunta7',
    pregunta:
      '¿Cómo se llama el paso arriba de la montaña que intentó usar la Comunidad del Anillo?',
    respuestas: ['Moria', 'Erebor', 'Khazad-Dûm', 'Caradhras'],
    correcta: 'Caradhras'
  },
  {
    id: 'pregunta8',
    pregunta:
      '¿Cómo se llamaba el consejero de Théoden que le mantenía envenenado?',
    respuestas: ['Grima', 'Háma', 'Haldir', 'Éomer'],
    correcta: 'Grima'
  },
  {
    id: 'pregunta9',
    pregunta: '¿Cómo se llamaba el capitán de la guarda de Théoden?',
    respuestas: ['Haldir', 'Háma', 'Éomer', 'Théodred'],
    correcta: 'Háma'
  },
  {
    id: 'pregunta10',
    pregunta: '¿Cómo se llamaba el padre de Isildur?',
    respuestas: ['Andúril', 'Aiwendil', 'Narsil', 'Elendil'],
    correcta: 'Elendil'
  },
  {
    id: 'pregunta11',
    pregunta: '¿Cómo se llama el hogar de los Nazgûl?',
    respuestas: ['Minas Morgoth', 'Minas Morgul', 'Minas Tirith', 'Dol Guldur'],
    correcta: 'Minas Morgul'
  },
  {
    id: 'pregunta12',
    pregunta: '¿De dónde es la Dama Galadriel?',
    respuestas: ['Mirkwood', 'Lothlórien', 'Rivendell', 'Lórien'],
    correcta: 'Lothlórien'
  }
];
let INIT_SCORE = 0;
let score;
export const initTrivial = () => {
  const divApp = document.querySelector('#app');
  divApp.innerHTML = '';

  createCardsTrivial();
  score = INIT_SCORE;
  createScoreDiv();
  createResetBtn();
};

const createCardsTrivial = () => {
  const divApp = document.querySelector('#app');
  const trivialSection = document.createElement('section');
  const trivialTitle = document.createElement('h2');

  trivialSection.classList.add('trivial-section');
  trivialTitle.textContent = 'ESDLA Trivial';
  trivialTitle.classList.add('trivial-title');

  for (const card of dataTrivial) {
    const divDeDivs = document.createElement('div');
    const containerAns = document.createElement('div');
    const questionTitle = document.createElement('h4');
    questionTitle.textContent = card.pregunta;

    divDeDivs.classList.add('div-container');
    containerAns.classList.add('div-answers');
    questionTitle.classList.add('question');

    for (let i = 0; i < card.respuestas.length; i++) {
      const divInputLabel = document.createElement('div');
      const inputCheckbox = document.createElement('input');
      const labelInput = document.createElement('label');

      divInputLabel.classList.add('div-input-label');
      inputCheckbox.classList.add('input-checkbox');
      labelInput.classList.add('label-answer');

      inputCheckbox.type = 'checkbox';
      inputCheckbox.id = `${card.id}-${i}`;
      inputCheckbox.name = card.id;

      labelInput.htmlFor = `${card.id}-${i}`;
      labelInput.textContent = card.respuestas[i];

      if (card.respuestas[i] === card.correcta) {
        inputCheckbox.setAttribute('data-correct', 'true');
      }

      inputCheckbox.addEventListener('click', () => {
        checkAnswer(inputCheckbox, card.correcta);
        hideOtherOptions(divDeDivs, inputCheckbox);
      });

      divInputLabel.append(inputCheckbox, labelInput);
      containerAns.append(divInputLabel);
    }
    divDeDivs.append(questionTitle, containerAns);
    trivialSection.append(divDeDivs);
    divApp.append(trivialTitle, trivialSection);
  }
};

const checkAnswer = (checkbox, correctAnswer) => {
  const container = checkbox.parentElement;
  const selectedAnswer = checkbox.nextElementSibling.textContent;

  document
    .querySelectorAll(`input[name="${checkbox.name}"]:checked`)
    .forEach((box) => {
      if (box !== checkbox) {
        box.checked = false;
        box.parentElement.style.backgroundColor = '';
      }
    });

  if (checkbox.checked) {
    if (selectedAnswer === correctAnswer) {
      container.style.backgroundColor = '#8cc78c';
      score++;
    } else {
      container.style.backgroundColor = '#e68484';
    }
  } else {
    container.style.backgroundColor = '';
  }

  updateScore();
};

function updateScore() {
  const scoreElement = document.querySelector('.score');
  if (scoreElement) {
    scoreElement.textContent = `Puntuación: ${score}`;
  } else {
    console.error("No se encontró el elemento con clase '.score'.");
  }
}

function hideOtherOptions(container, selectedCheckbox) {
  const allCheckBoxes = container.querySelectorAll('.input-checkbox');
  allCheckBoxes.forEach((box) => {
    if (box !== selectedCheckbox) {
      box.parentElement.style.display = 'none';
    }
  });
}

function createScoreDiv() {
  const divApp = document.querySelector('#app');
  const scoreDiv = document.createElement('div');
  const scoreP = document.createElement('p');

  scoreDiv.classList.add('score-div');
  scoreP.classList.add('score');
  scoreP.textContent = `Puntuación: ${score}`;

  scoreDiv.append(scoreP);
  divApp.append(scoreDiv);
}

function createResetBtn() {
  const divApp = document.querySelector('#app');
  const resetBtn = document.createElement('button');

  resetBtn.textContent = 'Reset';
  resetBtn.classList.add('reset-btn');

  resetBtn.addEventListener('click', () => {
    initTrivial();
  });
  divApp.append(resetBtn);
}
