
const gatherData = require('./gatherData.js');

// const fileLocation = './day6/test.txt'; // answer 19
// const fileLocation = './day6/test2.txt'; // answer 23
// const fileLocation = './day6/test3.txt'; // answer 23
// const fileLocation = './day6/test4.txt'; // answer 29
// const fileLocation = './day6/test5.txt'; // answer 26
const fileLocation = './day6/data.txt';

function findProcessedChars(data) {
    let index = 0;
    let fourChars = "";
    while(fourChars.length < 14) {
        if(fourChars.indexOf(data[index]) >= 0) {
            fourChars = fourChars.slice(fourChars.indexOf(data[index]) + 1);
            fourChars += data[index];
        } else {
            fourChars += data[index];
        }
        index++;
    }
    return index;
}

function run() {
    let data = gatherData(fileLocation);
    return findProcessedChars(data);
}

module.exports = run;