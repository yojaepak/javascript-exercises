const fibonacci = function(input) {
    if (input < 0){
        return "OOPS";
    }
    else if (typeof input === "string"){
        input = parseInt(input);
    }
    let value = 1;
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
