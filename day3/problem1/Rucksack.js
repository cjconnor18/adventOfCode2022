class Rucksack {
    constructor(compartment1, compartment2) {
        this.compartment1 = compartment1;
        this.compartment2 = compartment2;
    }
    findDuplicate() {
        for(let i = 0; i < this.compartment1.length; i++) {
            for(let j = 0; j < this.compartment2.length; j++) {
                if(this.compartment1[i] == this.compartment2[j]) {
                    return this.compartment1[i];
                }
            }
        }
    }
}

module.exports = Rucksack;