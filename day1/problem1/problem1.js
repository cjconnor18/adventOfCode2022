const fs = require('fs');

const fileLocation = './day1/problem1/test.txt';
// const fileLocation = './day1/problem1/data.txt';

let data = [];

function gatherData() {
    let curData = "";
    let current = fs.readFileSync(fileLocation, (err, data) => {
        curData = data.toString();
    });
    return current.toString();
}

function arrangeData(current) {
    let firstArr = current.split("\r\n\r\n");
    let arr = [];
    for (let i = 0; i < firstArr.length; i++) {
        data.push(firstArr[i].split("\r\n"));
    }

    return data;
}

function run() {
    dataStr = gatherData();
    data = arrangeData(dataStr);
    return data;
}


module.exports = run;