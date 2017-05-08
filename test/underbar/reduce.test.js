const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    let numArr = [1, 1, 2, 3, 5, 8, 13];
    let result =_.reduce(numArr, (acc, num) => acc + num, 67);
    expect(result).toEqual(100);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
  	let numArr = [1, 1, 2, 3, 5, 8, 13];
    expect(_.reduce(numArr, (acc, num) => acc + num)).toEqual(33);
  });

    it('reduces an object with key value pairs of numbers to a sum, *with* a non-zero explicit initial value for the accumulator', () => {
    const numsObj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5
    };
    const result = _.reduce(numsObj, (acc, num) => acc + num, 5);
    expect(result).toEqual(20);
  });

    it('reduces an object with key value pairs of numbers to a sum, *with* a non-zero explicit initial value for the accumulator', () => {
    const numsObj = [1, 2, 3, 4, 5];
    const result = _.reduce(numsObj, (acc, num) => acc + num, 5);
    expect(result).toEqual(20);
  });
});