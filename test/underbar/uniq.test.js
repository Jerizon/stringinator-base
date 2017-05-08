const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const arr = ['obtuse', 'rubber goose', 'green moose', 'guava juice', 'guava juice', 'guava juice'];
    const results = _.uniq(arr);
    expect(results).toEqual(['obtuse', 'rubber goose', 'green moose', 'guava juice']);
  });
});