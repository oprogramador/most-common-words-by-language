import loadWords from 'most-common-words-by-language/loadWords';

function getList(language, count) {
  const words = loadWords();

  return words[language].slice(0, count);
}

export default getList;
