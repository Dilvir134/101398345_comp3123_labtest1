var Promise = require('promise');
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
const numArray = [1, 2, 3, 4]

function lowerCase(array) {
    return new Promise((resolve, reject) => {
        const filteredArray = array
            .filter(item => typeof item === 'string')
            .map(item => item.toLowerCase());

        if (filteredArray.length > 0) {
            resolve(filteredArray);
        } else {
            reject('No string elements found in the array');
        }
    });
}

lowerCase(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));

lowerCase(numArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));