const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {

  return _.reject(str.split(''), char => char === target).join('');
};

const hasChar = function(str, target) {
  return _.some(str, letter => letter === target);
};

const isOnlyDigits = function(str) {
  return _.every(str, letter => !isNaN(letter));
};

const filterToOnlyDigits = function(str) {
  return _.reject(str, letter => (isNaN(letter) || letter === ' ')).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
  return _.map(obj, str => truncateString(str, maxLength));
};

const countChars = function(str) {
  return _.reduce(str.split(''), (result, letter)=> {
    if(result[letter] === undefined)
     {result[letter] = 1;
     } else {
      result[letter] += 1;
     }
     return result;
  }, {})
};

const dedup = function(str) {
  return _.uniq(str).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};