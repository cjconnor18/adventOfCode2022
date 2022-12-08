const gatherData = require('./gatherData.js');

// const fileLocation = './day1/problem1/test.txt';
const fileLocation = './day1/problem1/data.txt';

function mostSnacks(data) {
    let most = 0;
    data.sort(function(a, b) {return b-a}); // sort descending order
    return data[0]; // grab highest according to sort
}

function run() {
    let data = gatherData(fileLocation);
    return mostSnacks(data);
}


module.exports = run;