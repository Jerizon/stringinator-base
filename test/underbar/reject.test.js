const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const results = _.reject(arr, item => item % 2 === 1);
    expect(results).toEqual([2, 4, 6, 8]);
  });

  it('rejects null values from an object', () => {
    const obj = {
    	a: 'Perrywinkle',
    	b: 'Fuscha',
    	c: null,
    	d: null,
    	e: 'apricot'
    }
    const results = _.reject(obj, value => value === null);
    expect(results).toEqual(['Perrywinkle', 'Fuscha', 'apricot']);
  });
});