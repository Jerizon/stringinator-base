const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    expect(_.map([1, 3, 5], item => {
    	return item * item;
    })).toEqual([1, 9, 25]);
  });
});