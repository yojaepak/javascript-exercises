const removeFromArray = function() {
    for (let j = 1; j < arguments.length; j++){
        let i = 0;
        for (const num of arguments[0]) {
            if (num === arguments[j]) {
                arguments[0].splice(i, 1);
            }
            i++;
        }
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
