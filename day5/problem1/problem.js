const gatherData = require('../gatherData.js');

const fileLocation = './day5/test.txt';
// const fileLocation = './day5/data.txt';



function run() {
    let data = gatherData(fileLocation);
    return data;
}

module.exports = run;