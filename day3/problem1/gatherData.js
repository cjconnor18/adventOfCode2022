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
    
    return arr;
}

function getData(fileLocation) {
    return arrangeData(gatherData(fileLocation));
}

module.exports = getData;