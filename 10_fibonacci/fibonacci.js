const fibonacci = function(input) {
    let value = 0;
    let last = 1;
    let current = 1;
    while (input > 2) {
        value = last + current;
        last = current;
        current = value;
        input--;
    }
    
    return value;

};

// Do not edit below this line
module.exports = fibonacci;
