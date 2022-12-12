const gatherData = require('./gatherData.js');
let SupplyStacks = require('./SupplyStacks.js');

// const fileLocation = './day5/test.txt';
const fileLocation = './day5/data.txt';

function run() {
    let data = gatherData(fileLocation);
    data.processMoves();
    return data.displayLastItem();
}

module.exports = run;