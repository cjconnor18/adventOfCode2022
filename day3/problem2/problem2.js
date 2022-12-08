const gatherData = require('../gatherData.js');
const Group = require('./Group.js');
const priorities = require('../priorities.js');

// const fileLocation = './day3/test.txt';
const fileLocation = './day3/data.txt';

function createGroups(data) {
    let arrOfGroups = [];
    for(let i = 0; i < data.length; i += 3) {
        let group = new Group(data[i], data[i + 1], data[i + 2]);
        arrOfGroups.push(group);
    }

    return arrOfGroups;
}

function findTotalOfPriorities(data, scoresObj) {
    let sum = 0;
    data.forEach((element) => {
        sum += scoresObj[element.findPriority()]
    });
    return sum;
}


function run() {
    let prioritiesScores = priorities();
    let data = gatherData(fileLocation);
    data = createGroups(data);
    return findTotalOfPriorities(data, prioritiesScores);
}



module.exports = run;