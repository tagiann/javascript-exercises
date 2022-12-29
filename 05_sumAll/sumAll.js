const sumAll = function(num1, num2) {
    if (!(Number.isInteger(num1)) || !(Number.isInteger(num2)))
        return 'ERROR'
    if ((num1 < 0) || (num2 < 0))
        return 'ERROR';
    let sum = num1 + num2;
    if (num1 <= num2)
        for (i = num1 + 1; i < num2; i++)
            sum += i;
    else
        for (i = num2 + 1; i < num1; i++)
            sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
