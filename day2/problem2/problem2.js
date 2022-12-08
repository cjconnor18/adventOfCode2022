const gatherData = require('../gatherData.js');
const determineScore = require('./determineScore.js');

// const fileLocation = './day2/test.txt';
const fileLocation = './day2/data.txt';

function calculateScore(data) {
    let sum = 0;
    data.forEach((element) => {
        sum += determineScore(element[0], element[1]);
    })
    return sum;
}



function run() {
    let data = gatherData(fileLocation);
    return calculateScore(data);
}


module.exports = run;