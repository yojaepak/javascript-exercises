const removeFromArray = function(array, removal) {
    let i = 0;
    for (const num of array) {
   
        if (num === removal) {
            array.splice(i, 1);
  
        }
        i++;
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
