const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    expect(_.last(['J', 'E', 'Y'], 1)).toEqual('Y');
  });

  it('returns the last 2 elements of an array', () => {
    expect(_.last(['J', 'E', 'Y'], 2)).toEqual(['E', 'Y']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.last(['J', 'E', 'Y'], 39)).toEqual(['J', 'E', 'Y']);
  });
});