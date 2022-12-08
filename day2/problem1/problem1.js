const gatherData = require('../gatherData.js');
const checkHand = require('./checkHand.js');

// const fileLocation = './day2/test.txt';
const fileLocation = './day2/data.txt';

function calculateWins(data) {
    let sum = 0; 
    data.forEach(element => {
        sum += checkHand(element[0], element[1]);
    });
    return sum;
}

function run() {
    let data = gatherData(fileLocation);
    return calculateWins(data);
}

module.exports = run;