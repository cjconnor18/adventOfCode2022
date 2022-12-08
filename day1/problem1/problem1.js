const gatherData = require('./gatherData.js');

const fileLocation = './day1/problem1/test.txt';
// const fileLocation = './day1/problem1/data.txt';

let data = [];

function run() {

    data = gatherData(fileLocation);
    return data;
}


module.exports = run;