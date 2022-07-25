const findTheOldest = function(input) {
    const oldest = input.sort(function(a,b) {
        if (a.yearOfDeath === undefined) {
            let today = new Date();
            let year = today.getFullYear();
            const firstPerson = year - a.yearOfBirth;
            const nextPerson = b.yearOfDeath - b.yearOfBirth;
            return firstPerson > nextPerson ? -1 : 1;
        }
        else if (b.yearOfDeath === undefined) {
            let today = new Date();
            let year = today.getFullYear();
            const nextPerson = year - b.yearOfBirth;
            const firstPerson = a.yearOfDeath - a.yearOfBirth;
            return firstPerson > nextPerson ? -1 : 1;
        }
        else {
            const firstPerson = a.yearOfDeath - a.yearOfBirth;
            const nextPerson = b.yearOfDeath - b.yearOfBirth;
            return firstPerson > nextPerson ? -1 : 1;
        }
        
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
