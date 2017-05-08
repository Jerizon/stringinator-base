const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const arr = [1, 2, 4, 6, 8]
    expect(_.some(arr, item => item % 2 === 1)).toEqual(true);
  });

  it('returns false if no number is odd', () => {
    const arr = [2, 4, 6, 8]
    expect(_.some(arr, item => item % 2 === 1)).toEqual(false);
  });

});