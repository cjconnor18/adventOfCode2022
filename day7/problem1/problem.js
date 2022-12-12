
const gatherData = require('./gatherData.js');

const fileLocation = './day7/test.txt'; 
// const fileLocation = './day7/data.txt';



function run() {
    let data = gatherData(fileLocation);
    return data;
}

module.exports = run;