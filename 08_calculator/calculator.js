const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array1) {
  let sum = 0 ;
  array1.forEach((num) => {
    sum += num
  })
  return sum;
};

const multiply = function(array1) {
  let result = 1;
  array1.forEach((num) =>{
    result *= num;
  })
  return result;
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
	if (num === 0)
    return 1;
  let result = 1; 
  for(let i = 1; i <= num; i++)
    result *= i;
  return result;
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
