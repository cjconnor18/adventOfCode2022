const fs = require('fs');

function gatherData(fileLocation) {
    let curData = "";
    let current = fs.readFileSync(fileLocation, (err, data) => {
        curData = data.toString();
    });
    return current.toString();
}

function arrangeData(current) {
    let arr = current.split("\r\n");
    let curArr = [];
    for(let i = 0; i < arr.length; i++) {
        curArr.push(arr[i].split(" "));
    }
    
    return curArr;
}

function getData(fileLocation) {
    return gatherData(fileLocation);
}

module.exports = getData;