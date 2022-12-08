const shapeScore = {
    "X" : 1,
    "Y" : 2,
    "Z" : 3
}

const resultScore = {
    "lose" : 0,
    "draw" : 3,
    "win" : 6
}

function calculateOutcome(you, me) {
    if((you == "A" && me == "X") ||
       (you == "B" && me == "Y") ||
       (you == "C" && me == "Z") ) {
        return resultScore["draw"];
    }else if(you == "A") {
        if(me == "Y") {
            return resultScore["win"];
        }
    } else if (you == "B") {
        if(me == "Z") {
            return resultScore["win"];
        }
    } else if (you == "C") {
        if(me == "X") {
            return resultScore["win"];
        }
    }
    return resultScore["lose"];
}


function checkHand(you, me) {
    return shapeScore[me] + calculateOutcome(you, me);
}

module.exports = checkHand;