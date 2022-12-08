const gatherData = require('./gatherData.js');
const Rucksack = require('./Rucksack.js');
const priorities = require('./priorities.js');

// const fileLocation = './day3/problem1/test.txt';
const fileLocation = './day3/problem1/data.txt';

function createRucksacks(data) {
    let arrOfRucksacks = [];
    for(let i = 0; i < data.length; i++) {
        let len = data[i].length/2;
        let rucksack = new Rucksack(data[i].slice(0, len), data[i].slice(len));
        arrOfRucksacks.push(rucksack);
    }

    return arrOfRucksacks;
}

function findTotalOfPriorities(data, scoresObj) {
    let sum = 0;
    data.forEach((element) => {
        sum += scoresObj[element.findDuplicate()]
    });
    return sum;
}


function run() {
    let prioritiesScores = priorities();
    let data = gatherData(fileLocation);
    data = createRucksacks(data);
    return findTotalOfPriorities(data, prioritiesScores);
}



module.exports = run;