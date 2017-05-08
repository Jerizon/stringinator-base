const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const myFamily = {
    	Josh: {age : 33},
    	Brittany: {age: 31},
    	Jey: {age: 27},
    	Zachary : {age: 20},
    	Benjamin: {age: 17},
    	Natalie: {age: 12}
    }
    expect(_.pluck(myFamily, 'age')).toEqual([33, 31, 27, 20, 17, 12]);
  });

});