import expect from 'most-common-words-by-language/tests/expect';
import getWordsList from 'most-common-words-by-language/getWordsList';

describe('getWordsList', () => {
  it('returns 3 most common English words', () => {
    const result = getWordsList('english', 3);

    expect(result).to.deep.equal([
      'the',
      'of',
      'and',
    ]);
  });

  it('returns 5 most common Spanish words', () => {
    const result = getWordsList('spanish', 5);

    expect(result).to.deep.equal([
      'que',
      'de',
      'no',
      'a',
      'la',
    ]);
  });

  it('returns 10000 most common French words without passing the count', () => {
    const result = getWordsList('french');

    expect(result).to.have.length(10000);
    expect(result).to.containSubsetInOrder([
      'de',
      'la',
      'le',
      'et',
      'étonnant',
      'organisation',
      'constater',
      'Ariane',
      'BREF',
      'Bart',
      'Bruxelles-Capitale',
      'Cola',
    ]);
  });
});
