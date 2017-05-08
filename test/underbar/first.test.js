const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first([4, 3, 1, 8])).toBe(4);
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first([4, 3, 1, 8], 2)).toEqual([4, 3]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first([4, 3, 1, 8], 89)).toEqual([4, 3, 1, 8]);
  });
});