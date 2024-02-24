import './header.css';
import { arrayLinksToGames } from '../../data/links';

export const createHeader = () => {
  const body = document.querySelector('body');
  const divApp = document.querySelector('#app');
  const headerHTML = document.createElement('header');
  const title = document.createElement('h1');
  const gamesDiv = document.createElement('div');

  for (const link of arrayLinksToGames) {
    const divContainer = document.createElement('div');
    const linkToGame = document.createElement('a');
    const imageGame = document.createElement('img');
    const titleGame = document.createElement('p');

    linkToGame.href = link.url;
    imageGame.src = link.imageUrl;
    titleGame.textContent = link.text;

    linkToGame.addEventListener('click', link.page);

    divContainer.classList.add('div-container-game');
    divContainer.id = link.text.toLowerCase().replace(/\s+/g, '-');
    linkToGame.classList.add('link-to-game');
    imageGame.classList.add('image-game');
    titleGame.classList.add('title-game');

    linkToGame.append(imageGame);
    divContainer.append(linkToGame, titleGame);
    gamesDiv.append(divContainer);
  }

  title.textContent = 'TIME TO PLAY';

  title.classList.add('title');
  gamesDiv.classList.add('all-games-div');
  headerHTML.append(title, gamesDiv);
  body.prepend(headerHTML);
};
