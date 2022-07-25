const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(first) {
  totalValue = first.reduce((total, next) => total + next , 0);
  return totalValue;
};

const multiply = function(first) {
  totalMultiply = first.reduce((total, next) => total * next, 1);
  return totalMultiply;
};

const power = function(first, second) {
	return first ** second;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
