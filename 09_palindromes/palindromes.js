function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

const palindromes = function (word) {
    let reverse = reverseString(word);
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    word = word.replace(/\s/g, "");
    reverse = reverse.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    reverse = reverse.replace(/\s/g, "");
    reverse = reverse.toLowerCase()
    word = word.toLowerCase();
    if (word === reverse)
        return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
