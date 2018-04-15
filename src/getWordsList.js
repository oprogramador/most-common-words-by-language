import loadWords from 'most-common-words-by-language/loadWords';

function getWordsList(language, count) {
  const words = loadWords();

  return words[language].slice(0, count);
}

export default getWordsList;
