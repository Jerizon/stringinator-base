const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    expect(_.contains(arr, 'c')).toEqual(true);
  });

  it('returns false if an array does not contain the target', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    expect(_.contains(arr, 'f')).toEqual(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const obj = {
      a: 'I fell in love with a Starship Trooper',
      b: 'Sarah Brightman and Hot Gossip'
    }
    expect(_.contains(obj, 'I fell in love with a Starship Trooper')).toEqual(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const obj = {
      a: 'I fell in love with a Starship Trooper',
      b: 'Sarah Brightman and Hot Gossip'
    }
    expect(_.contains(obj, 'Video killed the Radio Star')).toEqual(false);
  });

});