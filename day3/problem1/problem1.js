const gatherData = require('../gatherData.js');

const fileLocation = './day3/problem1/test.txt';
// const fileLocation = './day3/problem1/data.txt';


function run() {
    let data = gatherData(fileLocation);
    return data;
}


module.exports = run;