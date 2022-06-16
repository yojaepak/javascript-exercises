const sumAll = function(num1, num2) {
    let result = 0;
    let start;
    let end;

    if (num1 > num2) {
        start = num2;
        end = num1;
    }
    else {
        start = num1;
        end = num2;
    }


    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    }

    for (let i = start; i < end + 1; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
