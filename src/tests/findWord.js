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

  it('finds a word in many language and ignores case', () => {
    const result = findWord('chance');

    expect(result).to.deep.equal({
      english: 1885,
      french: 1317,
      german: 573,
      spanish: 5506,
    });
  });
});
