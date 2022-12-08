const gatherData = require('../gatherData.js');

const fileLocation = './day4/test.txt';
// const fileLocation = './day4/data.txt';


function run() {
    let data = gatherData(fileLocation);
    return data;
}

module.exports = run;