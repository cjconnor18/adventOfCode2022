const gatherData = require('../gatherData.js');

// const fileLocation = './day4/test.txt';
const fileLocation = './day4/data.txt';

function checkForInclusion(data) {
    let total = 0;
    for(let i = 0; i < data.length; i++) {
        let oneSet = data[i][0].split("-");
        let secondSet = data[i][1].split("-");
        
        if((parseInt(oneSet[0]) >= parseInt(secondSet[0]) && 
            parseInt(oneSet[1]) <= parseInt(secondSet[1])) || (
            parseInt(oneSet[0]) <= parseInt(secondSet[0]) && 
            parseInt(oneSet[1]) >= parseInt(secondSet[1])
            )) {
                total++;
            }
    }

    return total;
}

function run() {
    let data = gatherData(fileLocation);
    return checkForInclusion(data);
}

module.exports = run;