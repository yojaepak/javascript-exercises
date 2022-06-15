const reverseString = function(string) {
    let result = "";
    for (const letter of string) {
        result = letter + result;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
