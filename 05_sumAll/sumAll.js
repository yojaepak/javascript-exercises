const sumAll = function(start, end) {
    let result = 0;
    for (let i = start; i < end + 1; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
