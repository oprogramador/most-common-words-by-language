import expect from 'most-common-words-by-language/tests/expect';
import findWord from 'most-common-words-by-language/findWord';

describe('findWord', () => {
  it('returns an empty object for a not found word', () => {
    const result = findWord('nonExistentWord');

    expect(result).to.deep.equal({});
  });

  it('finds a word in a single language', () => {
    const result = findWord('newsletters');

    expect(result).to.deep.equal({
      english: 2425,
    });
  });

  it('finds a word in two languages', () => {
    const result = findWord('angeles');

    expect(result).to.deep.equal({
      english: 1788,
      spanish: 2770,
    });
  });

  it('finds a word in three languages', () => {
    const result = findWord('a');

    expect(result).to.deep.equal({
      english: 5,
      french: 16,
      spanish: 4,
    });
  });
});
