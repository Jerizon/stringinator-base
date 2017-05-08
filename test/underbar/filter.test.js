const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const results = _.filter(arr, item => item % 2 === 1);
    expect(results).toEqual([1, 3, 5, 7])
  });

  it('filters an object to only numeric values', () => {
    const obj = {
    	a: 'Things Jey needs when moving to San Francisco',
    	b: 'Learn how to spell Fransico. It is with a \'c\'',
    	c: 4,
    	d: 8,
    	e: 'A bike'
    }
    const results = _.filter(obj, item => !isNaN(item));
    expect(results).toEqual([4, 8]);
  });
});