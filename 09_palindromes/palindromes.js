const palindromes = function (input) {
    let original = input.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
    let splitting = original.split(""); 
    let reverse = splitting.reverse();
    let reversed = reverse.join("");
    if (original === reversed) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
