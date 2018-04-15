import loadWords from 'most-common-words-by-language/loadWords';

function findWord(word) {
  const allWords = loadWords();

  return Object.assign(
    {},
    ...Object.entries(allWords)
      .map(([name, words]) => {
        const foundIndex = words.findIndex(w => w === word);

        return foundIndex >= 0 ? { [name]: foundIndex + 1 } : {};
      }),
  );
}

export default findWord;
