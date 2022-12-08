const fs = require('fs');

function gatherData(fileLocation) {
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
        arr.push(firstArr[i].split("\r\n"));
    }

    return arr;
}

function getData(fileLocation) {
    return arrangeData(gatherData(fileLocation));
}

module.exports = getData;