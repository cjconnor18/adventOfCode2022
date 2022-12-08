const shapes = {
    "A" : "X",
    "B" : "Y",
    "C" : "Z"
}

const winShapes = {
    "A" : "Y",
    "B" : "Z",
    "C" : "X"
}

const loseShapes = {
    "A" : "Z",
    "B" : "X",
    "C" : "Y"
}

const shapeScore = {
    "X" : 1,
    "Y" : 2,
    "Z" : 3
}

const results = {
    "X" : "lose",
    "Y" : "draw",
    "Z" : "win"
}

const resultScore = {
    "lose" : 0,
    "draw" : 3,
    "win" : 6
}


function determineResult(you, result) {
    if(results[result] == "draw") {
        return shapeScore[shapes[you]];
    } else if(results[result] == "win") {
        return shapeScore[winShapes[you]];
    } 
    return shapeScore[loseShapes[you]];
}



function determineScore(you, result) {
    return determineResult(you, result) + resultScore[results[result]];
}

module.exports = determineScore;