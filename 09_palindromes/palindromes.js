const palindromes = function (input) {
    let original = input.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
    original = original.toLowerCase();
    let splitting = original.split(""); 
    let reverse = splitting.reverse();
    let reversed = reverse.join("");
    reversed.toLowerCase();
    if (original === reversed) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
