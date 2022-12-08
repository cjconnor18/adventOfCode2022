const gatherData = require('../gatherData.js');

const fileLocation = './day2/test.txt';
// const fileLocation = './day2/data.txt';





function run() {
    let data = gatherData(fileLocation);
    return data;
}


module.exports = run;