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
            for(let j = 0; j < this.moves[i][0]; j++) {
                if(this.stacks[this.moves[i][1]].length < 1) {
                    console.log("***************************************")
                } else {
                    let cur = this.stacks[this.moves[i][1]].pop();
    
                    // if(i > 225) {
                    //     break;
                    // }
                    this.stacks[this.moves[i][2]].push(cur);
    
                }
            }
        }
        return this.stacks;
    }
}

module.exports = SupplyStacks;
