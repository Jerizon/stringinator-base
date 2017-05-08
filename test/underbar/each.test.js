const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
   const array = [1, 2, 3, 4, 5, 6]
    _.each(array, (currentValue, currentIndex, obj) =>{
    	expect(currentValue).toEqual(obj[currentIndex]);
    })
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrayLikeObject = {
    	length: 4,
    	a: 'a',
    	b: 'b',
    	c: 'c',
    	d: 'd'
    }
    _.each(arrayLikeObject, (value, index, arrayishObject) => {
    	expect(value).toEqual(arrayishObject[index]);
    })
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const partyTime = {
    	p: 'p',
    	r: 'r',
    	t: 't'
    }
    _.each(partyTime, (value, index, obj) => {
    	expect(value).toEqual(obj[key]);
    })
  });
});

