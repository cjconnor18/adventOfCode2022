function createPriorities () {
    let priorities = {};
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < alphabet.length; i++) {
        priorities[alphabet[i]] = i + 1;
    }

    return priorities;
}

module.exports = createPriorities;