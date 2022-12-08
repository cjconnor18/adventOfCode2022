class Group {
    constructor(rucksack1, rucksack2, rucksack3) {
        this.rucksack1 = rucksack1;
        this.rucksack2 = rucksack2;
        this.rucksack3 = rucksack3
    }
    findPriority() {
        for(let i = 0; i < this.rucksack1.length; i++) {
            if(this.rucksack2.includes(this.rucksack1[i]) &&
               this.rucksack3.includes(this.rucksack1[i])) {
                return this.rucksack1[i];
               }
        }
    }
}

module.exports = Group;