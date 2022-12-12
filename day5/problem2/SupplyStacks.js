class SupplyStacks {
    constructor(stacks, moves, originalMoves) {
        this.stacks = stacks;
        this.moves = moves;
        this.originalMoves = originalMoves;
    }
    
    displayLastItem() {
        let letters = '';
        for (let i = 1; i <= Object.keys(this.stacks).length; i++) {
            if(this.stacks[i].length < 1) {
                letters += " ";
            } else {
                letters += this.stacks[i][this.stacks[i].length-1];
            }
        }
        return letters;
    }

    processMoves() {
        for(let i = 0; i < this.moves.length; i++) {
            let currentStackIndex = this.moves[i][1];
            let currentMoves = this.moves[i][0];
            let currentMovesLength = this.stacks[currentStackIndex].length;
            let cur = this.stacks[currentStackIndex].splice(currentMovesLength - currentMoves, currentMoves);
            this.stacks[this.moves[i][2]] = this.stacks[this.moves[i][2]].concat(cur);
        }
        return this.stacks;
    }
}

module.exports = SupplyStacks;
