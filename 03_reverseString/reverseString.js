const reverseString = function(string) {
    let split = string.split("");
    let reverseArray = split.reverse();
    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
