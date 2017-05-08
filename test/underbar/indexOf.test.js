const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    expect(_.indexOf(['a', 'b', 'c,', 'd', 'e', 'f'], 'a')).toEqual(0);
  });

  it('returns the index of a value at the end of an array', () => {
    expect(_.indexOf(['a', 'b', 'c,', 'd', 'e', 'f'], 'f')).toEqual(5);
  });

  it('returns -1 for a missing value', () => {
    expect(_.indexOf(['a', 'b', 'c,', 'd', 'e', 'f'], 'g')).toEqual(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    expect(_.indexOf(['a', 'b', 'c', 'c', 'd', 'e', 'f'], 'c')).toEqual(2);
  });

  it('starts searching at the given offset', () => {
    expect(_.indexOf(['a', 'e', 'c,', 'd', 'e', 'f'], 'e', 2)).toEqual(4);
  });

});