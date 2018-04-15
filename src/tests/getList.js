import expect from 'most-common-words-by-language/tests/expect';
import getList from 'most-common-words-by-language/getList';

describe('getList', () => {
  it('returns 3 most common English words', () => {
    const result = getList('english', 3);

    expect(result).to.deep.equal([
      'the',
      'of',
      'and',
    ]);
  });

  it('returns 5 most common Spanish words', () => {
    const result = getList('spanish', 5);

    expect(result).to.deep.equal([
      'que',
      'de',
      'no',
      'a',
      'la',
    ]);
  });

  it('returns 10000 most common French words without passing the count', () => {
    const result = getList('french');

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
