const fs = require('fs');
const SupplyStacks = require("./problem1/SupplyStacks.js");

function gatherData(fileLocation) {
    let curData = "";
    let current = fs.readFileSync(fileLocation, (err, data) => {
        curData = data.toString();
    });
    return current.toString();
}

function arrangeData(current) {
    let arr = current.split("\r\n");
    let emptyIndex = arr.indexOf("");
    let part1 = arr.slice(0,emptyIndex);
    let stackObj = {};

    for(let i = 1; i < part1[0].length; i += 4) {
        for(let j = 0; j < part1.length - 1; j++) {
            if(part1[j][i] != " ") {
                if(!stackObj.hasOwnProperty(part1[emptyIndex-1][i])) {
                    stackObj[part1[emptyIndex-1][i]] = [];
                }
                stackObj[part1[emptyIndex-1][i]].unshift(part1[j][i]);
            }
        }
    }

    let part2 = arr.slice(emptyIndex + 1);
    let moves = [];

    for(let i = 0; i < part2.length; i++) {
        let arr2 = part2[i].split(" ");

        moves.push([parseInt(arr2[1]), parseInt(arr2[3]), parseInt(arr2[5])]);
    }

    let supplyStack = new SupplyStacks(stackObj, moves, part2);
    return supplyStack;
}

function getData(fileLocation) {
    return arrangeData(gatherData(fileLocation));
}

module.exports = getData;