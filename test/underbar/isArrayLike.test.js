const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([3, 4, 5, 6])).toEqual(true);
  });

  it('returns true for an array-like object', () => {
  	const arrayLikeObject = {
  		length: 10
  	}
    expect(_.isArrayLike(arrayLikeObject)).toEqual(true);
  });

  it('returns false for a non-array-like object', () => {
    const notArrayLikeObject = {
  		size: 10
  	}
    expect(_.isArrayLike(notArrayLikeObject)).toEqual(false);
  });
});
