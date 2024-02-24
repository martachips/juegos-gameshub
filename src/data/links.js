import { initGuess } from '../components/pages/guess-the-number/guess';
import { initTrivial } from '../components/pages/trivial/trivial';
import { initWaca } from '../components/pages/wacacrash/wacacrash';

export const arrayLinksToGames = [
  {
    url: '#',
    text: 'Guess the Number',
    imageUrl: '/images/guess-the-number.jpeg',
    page: initGuess
  },
  {
    url: '#',
    text: 'ESDLA Trivial',
    imageUrl:
      'https://img.asmedia.epimg.net/resizer/i5b_FFZP4esSU1vLd2z3NJY9FcY=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/EPMGYMVPCRLKZEFO77H4RNMRMI.jpg',
    page: initTrivial
  },
  {
    url: '#',
    text: 'WacaCrash',
    imageUrl: 'https://i.blogs.es/b91ddc/littlebig/1366_2000.jpeg',
    imageToKick:
      'https://static.wikia.nocookie.net/villains/images/1/18/The_Collector_LBP.png/revision/latest?cb=20191212222312',
    page: initWaca
  }
];
